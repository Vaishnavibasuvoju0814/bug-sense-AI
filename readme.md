#  BugSense AI

> AI-powered debugging assistant using Retrieval-Augmented Generation (RAG), LangChain, ChromaDB, Gemini 2.5 Flash, Django REST Framework, and React.

BugSense AI helps developers understand programming errors by retrieving relevant documentation from a knowledge base and generating structured AI-powered debugging reports.

---

## ✨ Features

- 🔐 JWT Authentication
- 🤖 Gemini 2.5 Flash Integration
- 📚 Retrieval-Augmented Generation (RAG)
- 🗂️ ChromaDB Vector Database
- 🔍 Semantic Error Retrieval
- 📄 Structured JSON AI Reports
- 📝 Analysis History
- ⚡ React + Django Architecture
- ✅ Unit Tested

## 🛠 Tech Stack

### Frontend
- React
- Axios
- React Router

### Backend
- Django
- Django REST Framework
- JWT Authentication

### AI
- Gemini 2.5 Flash
- LangChain

### RAG
- ChromaDB
- Gemini Embedding 001

### Knowledge Base
- Markdown Documents

### Testing
- Django Test Framework

                    +--------------------+
                    |   React Frontend   |
                    +---------+----------+
                              |
                              |
                              ▼
                  Django REST API (JWT)
                              |
                              ▼
                   Error Analyzer Module
                              |
                              ▼
                    Query Construction
                              |
                              ▼
                  ChromaDB Vector Store
                              |
                    Top-K Similar Chunks
                              |
                              ▼
                 Gemini 2.5 Flash (LLM)
                              |
                              ▼
              Structured JSON Debug Report
                              |
                              ▼
                    React Report Viewer

## 🧠 RAG Pipeline

1. User submits an error.
2. BugSense constructs a semantic search query.
3. ChromaDB retrieves the Top-5 relevant knowledge chunks.
4. Retrieved context is passed to Gemini.
5. Gemini generates a structured JSON debugging report.
6. Report is stored in the database and displayed to the user.

## 📊 Project Statistics

| Component | Technology |
|-----------|------------|
| Frontend | React |
| Backend | Django REST Framework |
| Authentication | JWT |
| LLM | Gemini 2.5 Flash |
| Embedding Model | Gemini Embedding 001 |
| Vector Database | ChromaDB |
| Retriever | LangChain |
| Knowledge Base | Markdown |
| Chunk Size | 300 |
| Chunk Overlap | 50 |
| Top-K Retrieval | 5 |
| Similarity Threshold | 0.4 |
| Unit Tests | 4 Passing |

## 💡 Why Retrieval-Augmented Generation?

Traditional LLMs rely only on their training data and may hallucinate or provide outdated solutions.

BugSense AI uses Retrieval-Augmented Generation (RAG) to ground responses in a curated knowledge base. Relevant documentation is retrieved using semantic search and provided as context to Gemini, resulting in more accurate and explainable debugging reports.

## 📸 Screenshots

- Login

- Signup
- Dashboard
- Analyze Error
- AI Generated Report
- Analysis History