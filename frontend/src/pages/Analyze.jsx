import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Report from "../components/Report";
import "../css/Analyze.css";
import API from "../services/api";

function Analyze() {

    const [language, setLanguage] = useState("Python");
    const [framework, setFramework] = useState("Django");
    const [errorText, setErrorText] = useState("");
    const [logFile, setLogFile] = useState(null);

    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);

    const handleAnalyze = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("access");

            if (!token) {
                alert("Please login first.");
                return;
            }

            const formData = new FormData();

            formData.append("language", language);
            formData.append("framework", framework);
            formData.append("error", errorText);

            if (logFile) {
                formData.append("log_file", logFile);
            }

            const response = await API.post(

                "/analyze/",

                formData,

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }

            );

            setReport(response.data.report);

        }

        catch (error) {

            console.log(error);

            if (error.response?.status === 401) {

                alert("Session expired. Please login again.");

            } else {

                alert("Something went wrong while analyzing the error.");

            }

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <section className="analyze-page">

                <h1>Analyze Your Error</h1>

                <p className="subtitle">
                    Paste an error, stack trace or upload a log file to receive AI-powered debugging assistance.
                </p>

                <div className="analyze-container">

                    <div className="input-row">

                        <div className="input-group">

                            <label>Programming Language</label>

                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option>Python</option>
                                <option>Java</option>
                                <option>JavaScript</option>
                                <option>C++</option>
                                <option>C</option>
                            </select>

                        </div>

                        <div className="input-group">

                            <label>Framework</label>

                            <select
                                value={framework}
                                onChange={(e) => setFramework(e.target.value)}
                            >
                                <option>Django</option>
                                <option>React</option>
                                <option>Flask</option>
                                <option>Spring Boot</option>
                                <option>Node.js</option>
                            </select>

                        </div>

                    </div>

                    <div className="input-group">

                        <label>Paste Error / Stack Trace</label>

                        <textarea
                            placeholder="Paste your error message..."
                            value={errorText}
                            onChange={(e) => setErrorText(e.target.value)}
                        />

                    </div>

                    <div className="input-group">

                        <label>Upload Log File</label>

                        <input
                            type="file"
                            onChange={(e) => setLogFile(e.target.files[0])}
                        />

                    </div>

                    <button
                        className="analyze-btn"
                        onClick={handleAnalyze}
                        disabled={loading}
                    >
                        {loading ? "Analyzing..." : "Analyze Error"}
                    </button>

                </div>

                <Report report={report} />

            </section>

            <Footer />

        </>

    );

}

export default Analyze;