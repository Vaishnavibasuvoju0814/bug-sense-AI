# 📚 RAG Evaluation

## Objective

Evaluate whether the retrieval pipeline successfully retrieves relevant documentation before generating AI responses.

---

# Configuration

| Parameter | Value |
|-----------|-------|
|Embedding Model|Gemini Embedding 001|
|Chunk Size|300|
|Chunk Overlap|50|
|Top K|5|
|Threshold|0.4|

---

# Evaluation 1

## Query

```
ModuleNotFoundError: No module named django
```

Retrieved Files

- installation.md
- imports.md

Expected Result

- Install Django
- Activate virtual environment

Result

✅ Correct Retrieval

---

# Evaluation 2

## Query

```
ImportError
```

Retrieved Files

- imports.md

Expected Result

- Verify imports
- Check virtual environment

Result

✅ Correct Retrieval

---

# Evaluation 3

## Query

```
pip install pandas
```

Retrieved Files

- installation.md

Expected Result

- Python package installation instructions

Result

✅ Correct Retrieval

---

# Evaluation 4

## Query

```
Wrong Python Interpreter
```

Retrieved Files

- installation.md
- imports.md

Expected Result

- Select correct interpreter
- Activate virtual environment

Result

✅ Correct Retrieval

---

# Evaluation 5

## Query

```
ModuleNotFoundError
```

Retrieved Files

- imports.md

Expected Result

- Package missing
- Incorrect module name
- Wrong PYTHONPATH

Result

✅ Correct Retrieval

---

# Observations

The retrieval pipeline consistently returned relevant documentation for common Python and Django errors.

The combination of semantic search, ChromaDB, and Gemini grounding reduced hallucinations and produced context-aware debugging reports.

---

# Conclusion

BugSense AI successfully demonstrates a complete Retrieval-Augmented Generation workflow by combining semantic retrieval with Gemini 2.5 Flash to generate structured debugging reports grounded in project documentation.