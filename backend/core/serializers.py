from rest_framework import serializers
from .models import Analysis


class AnalysisSerializer(serializers.ModelSerializer):

    class Meta:
        model = Analysis

        fields = [
            "id",
            "language",
            "framework",
            "error",
            "log_file",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
        ]


class AnalysisHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Analysis

        fields = [
            "id",
            "language",
            "framework",
            "error",
            "report",
            "created_at",
        ]