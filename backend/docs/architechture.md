# 🏗 BugSense AI Architecture

## Overview

BugSense AI is a Retrieval-Augmented Generation (RAG) based debugging assistant built using React, Django REST Framework, LangChain, ChromaDB, and Gemini 2.5 Flash.

The system retrieves relevant debugging documentation from a vector database before generating AI-powered debugging reports.

---

# High Level Architecture

```
                React Frontend
                       │
                       ▼
             Django REST Framework
                       │
                       ▼
             Authentication (JWT)
                       │
                       ▼
              Analyze Error API
                       │
                       ▼
              Query Construction
                       │
                       ▼
          ChromaDB Vector Database
                       │
           Top 5 Relevant Chunks
                       │
                       ▼
              Gemini 2.5 Flash
                       │
                       ▼
          Structured JSON Response
                       │
                       ▼
               React Dashboard
```

---

# Frontend

- React
- Axios
- React Router

Responsibilities

- User Authentication
- Upload Error Logs
- Display AI Reports
- View Analysis History

---

# Backend

Built using Django REST Framework.

Responsibilities

- Authentication
- Request Validation
- RAG Pipeline
- Report Generation
- Database Storage

---

# RAG Pipeline

1. User submits an error.
2. Query is generated.
3. ChromaDB performs semantic search.
4. Top 5 relevant chunks are retrieved.
5. Retrieved context is passed to Gemini.
6. Gemini generates a structured JSON report.
7. Report is stored in the database.
8. Report is returned to the frontend.

---

# Vector Database

Vector Store

- ChromaDB

Embedding Model

- Gemini Embedding 001

Configuration

- Chunk Size: 300
- Chunk Overlap: 50
- Top K: 5
- Similarity Threshold: 0.4