import os
from pathlib import Path

from dotenv import load_dotenv

from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_chroma import Chroma

# Load environment variables
load_dotenv()

BASE_DIR = Path(__file__).resolve().parents[2]

VECTOR_DB = BASE_DIR / "knowledge" / "chroma_db"

embeddings = GoogleGenerativeAIEmbeddings(
    model="models/gemini-embedding-001",
    google_api_key=os.getenv("GEMINI_API_KEY"),
)

db = Chroma(
    persist_directory=str(VECTOR_DB),
    embedding_function=embeddings
)


def retrieve_context(query, k=5, score_threshold=0.4):

    results = db.similarity_search_with_relevance_scores(
        query=query,
        k=k
    )

    documents = []
    sources = []

    for doc, score in results:

        if score < score_threshold:
            continue

        documents.append(doc)

        source = Path(doc.metadata["source"]).name

        if source not in sources:
            sources.append(source)

    context = ""

    for index, doc in enumerate(documents, start=1):

        source = Path(doc.metadata["source"]).name

        context += f"""
==============================
DOCUMENT {index}
Source : {source}
==============================

{doc.page_content}

"""

    return context, sources