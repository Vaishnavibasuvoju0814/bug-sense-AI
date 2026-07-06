from pathlib import Path

from dotenv import load_dotenv

from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma

from loader import load_documents

print("🚀 Started build_vector_db.py")

load_dotenv()

BASE_DIR = Path(__file__).resolve().parents[2]

VECTOR_DB = BASE_DIR / "knowledge" / "chroma_db"


def build_database():

    print("📂 Loading knowledge base...")

    documents = load_documents()

    print(f"✅ Documents Loaded: {len(documents)}")

    splitter = RecursiveCharacterTextSplitter(

        separators=[
            "\n## ",
            "\n# ",
            "\n",
            ". ",
            " ",
            ""
        ],

        chunk_size=300,

        chunk_overlap=50

    )

    chunks = splitter.split_documents(documents)

    print(f"✅ Chunks Created: {len(chunks)}")

    embeddings = GoogleGenerativeAIEmbeddings(

        model="models/gemini-embedding-001"

    )

    print("🧠 Generating Embeddings...")

    if VECTOR_DB.exists():

        import shutil

        shutil.rmtree(VECTOR_DB)

    Chroma.from_documents(

        documents=chunks,

        embedding=embeddings,

        persist_directory=str(VECTOR_DB)

    )

    print("\n======================================")
    print("🎉 Vector Database Created Successfully!")
    print("======================================")
    print(f"📄 Documents : {len(documents)}")
    print(f"🧩 Chunks    : {len(chunks)}")
    print(f"📁 Saved To  : {VECTOR_DB}")
    print("======================================\n")


if __name__ == "__main__":

    build_database()