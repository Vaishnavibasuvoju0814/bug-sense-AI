import json

from langchain_core.output_parsers import StrOutputParser

from core.rag.retriever import retrieve_context

from .llm import llm
from .prompts import debug_prompt


def generate_report(language, framework, error):

    query = f"{language} {framework} {error}"

    context, sources = retrieve_context(query)

    chain = debug_prompt | llm | StrOutputParser()

    response = chain.invoke({

        "language": language,
        "framework": framework,
        "context": context,
        "error": error

    })

    try:

        report = json.loads(response)

    except json.JSONDecodeError:

        report = {

            "root_cause": "Unable to generate AI report.",

            "explanation": (
                "The AI returned an invalid response format."
            ),

            "possible_fixes": [
                "Retry the analysis.",
                "Check your Gemini API key.",
                "Verify the AI prompt."
            ],

            "commands": [],

            "best_solution": (
                "Retry the request."
            ),

            "prevention": (
                "Ensure the language model returns valid JSON."
            ),

            "references": []

        }

    report["knowledge_sources"] = sources

    return report