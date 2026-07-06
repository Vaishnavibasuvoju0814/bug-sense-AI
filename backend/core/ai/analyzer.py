def analyze_error_metadata(error: str):

    error = error.lower()

    status = "Medium"
    category = "General Error"
    estimated_fix_time = "10-15 minutes"

    rules = [

        (
            ["modulenotfounderror", "importerror"],
            "Medium",
            "Dependency Error",
            "2-5 minutes"
        ),

        (
            ["syntaxerror", "indentationerror"],
            "Low",
            "Syntax Error",
            "1-2 minutes"
        ),

        (
            ["typeerror", "valueerror"],
            "Medium",
            "Type Error",
            "5-10 minutes"
        ),

        (
            ["keyerror", "indexerror"],
            "Medium",
            "Data Access Error",
            "3-5 minutes"
        ),

        (
            ["databaseerror", "integrityerror"],
            "Critical",
            "Database Error",
            "20-30 minutes"
        ),

        (
            ["connectionerror", "timeout"],
            "High",
            "Network Error",
            "10-20 minutes"
        ),

        (
            ["memoryerror"],
            "Critical",
            "Memory Error",
            "20-40 minutes"
        ),

        (
            ["permissionerror"],
            "High",
            "Permission Error",
            "5-15 minutes"
        )

    ]

    for keywords, sev, cat, time in rules:

        if any(keyword in error for keyword in keywords):

            status = sev
            category = cat
            estimated_fix_time = time

            break

    return {

        "status": status,
        "category": category,
        "estimated_fix_time": estimated_fix_time

    }