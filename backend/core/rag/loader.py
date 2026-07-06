from pathlib import Path

from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import TextLoader


BASE_DIR = Path(__file__).resolve().parents[2]

KNOWLEDGE_DIR = BASE_DIR / "knowledge"


def load_documents():

    loader = DirectoryLoader(

        KNOWLEDGE_DIR,

        glob="**/*.md",

        loader_cls=TextLoader,

        show_progress=True

    )

    return loader.load()