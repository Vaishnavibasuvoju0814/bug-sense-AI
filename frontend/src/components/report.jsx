import "../css/Report.css";

function Report({ report }) {

    if (!report) return null;

    const getReferenceTitle = (url) => {

        try {

            const hostname = new URL(url).hostname.replace("www.", "");

            return hostname;

        } catch {

            return url;

        }

    };

    const copyCommand = async (command) => {

        await navigator.clipboard.writeText(command);

        alert("Command copied!");

    };

    return (

        <div className="report-container">

            <h2 className="report-title">
                🐞 BugSense AI Report
            </h2>

            <div className="report-header">

                <div className={`badge status-${report.status.toLowerCase()}`}>
                    <span>Status</span>
                    <strong>{report.status}</strong>
                </div>

                <div className="badge">
                    <span>Category</span>
                    <strong>📂 {report.category}</strong>
                </div>

                <div className="badge">
                    <span>Language</span>
                    <strong>🐍 {report.language}</strong>
                </div>

                <div className="badge">
                    <span>Framework</span>
                    <strong>🎯 {report.framework}</strong>
                </div>

            </div>

            <div className="card">

                <h3>🛑 Root Cause</h3>

                <p>{report.root_cause}</p>

            </div>

            <div className="card">

                <h3>📖 Explanation</h3>

                <p>{report.explanation}</p>

            </div>

            <div className="card">

                <h3>🛠 Step-by-Step Fix</h3>

                <ul>

                    {report.possible_fixes.map((fix, index) => (

                        <li
                            key={index}
                            className="fix-item"
                        >

                            <span className="check-icon">
                                ✔
                            </span>

                            <span>{fix}</span>

                        </li>

                    ))}

                </ul>

            </div>

            <div className="card">

                <h3>💻 Commands</h3>

                {report.commands.map((cmd, index) => (

                    <div
                        className="command-box"
                        key={index}
                    >

                        <code>{cmd}</code>

                        <button
                            className="copy-btn"
                            onClick={() => copyCommand(cmd)}
                        >
                            📋 Copy
                        </button>

                    </div>

                ))}

            </div>

            <div className="card">

                <h3>⭐ Recommended Solution</h3>

                <p>{report.best_solution}</p>

            </div>

            <div className="card">

                <h3>💡 Prevention</h3>

                <p>{report.prevention}</p>

            </div>

            <div className="card">

                <h3>⏱ Estimated Fix Time</h3>

                <p>{report.estimated_fix_time}</p>

            </div>

            <div className="card">

                <h3>📚 Official References</h3>

                <ul className="reference-list">

                    {report.references.map((ref, index) => (

                        <li key={index}>

                            <a
                                href={ref}
                                target="_blank"
                                rel="noreferrer"
                            >

                                📘 {getReferenceTitle(ref)}

                            </a>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

export default Report;