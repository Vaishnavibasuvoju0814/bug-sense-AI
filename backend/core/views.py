from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import (
    AnalysisSerializer,
    AnalysisHistorySerializer,
)

from .models import Analysis

from .ai.report import generate_report
from .ai.analyzer import analyze_error_metadata


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def analyze_error(request):

    serializer = AnalysisSerializer(data=request.data)

    if not serializer.is_valid():

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    language = serializer.validated_data["language"]
    framework = serializer.validated_data["framework"]
    error = serializer.validated_data["error"]
    log_file = serializer.validated_data.get("log_file")

    metadata = analyze_error_metadata(error)

    try:

        ai_report = generate_report(

            language=language,
            framework=framework,
            error=error

        )

    except Exception as e:

        print("Gemini Error:", e)

        ai_report = {

            "root_cause": "AI service temporarily unavailable.",

            "explanation": "BugSense AI could not contact the Gemini model. Your analysis has still been saved and you can try again later.",

            "possible_fixes": [
                "Retry after a few minutes.",
                "Check your internet connection.",
                "Verify your Gemini API key.",
                "Ensure Gemini service is available."
            ],

            "commands": [],

            "best_solution": "Retry the analysis when the AI service becomes available.",

            "prevention": "Temporary AI outages are normal. BugSense AI stores your request so you don't lose your analysis.",

            "references": []
        }

    ai_report["status"] = metadata["status"]
    ai_report["category"] = metadata["category"]
    ai_report["estimated_fix_time"] = metadata["estimated_fix_time"]

    ai_report["language"] = language
    ai_report["framework"] = framework

    analysis = Analysis.objects.create(

        user=request.user,

        language=language,

        framework=framework,

        error=error,

        report=ai_report,

        log_file=log_file

    )

    return Response({

        "message": "Analysis completed successfully!",

        "report": ai_report,

        "analysis_id": analysis.id

    })


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def history(request):

    analyses = Analysis.objects.filter(

        user=request.user

    ).order_by("-created_at")

    serializer = AnalysisHistorySerializer(

        analyses,

        many=True

    )

    return Response(serializer.data)