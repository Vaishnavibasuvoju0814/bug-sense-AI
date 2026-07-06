import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/About.css";

function About() {
    return (
        <>
            <Navbar />

            <section className="about-page">

                <h1>About BugSense AI</h1>


                <div className="about-card">

                    <h2> Mission</h2>

                    <p>
                        BugSense AI helps developers understand software errors
                        faster by providing root cause analysis, intelligent
                        explanations, and practical fix suggestions.
                    </p>

                </div>

                <div className="about-card">

                    <h2>Problem Statement</h2>

                    <p>
                        Developers often spend hours searching documentation,
                        forums, and Stack Overflow to understand confusing
                        error messages. BugSense AI simplifies this process
                        using AI-powered analysis.
                    </p>

                </div>

                <div className="about-card">

                    <h2>Our Solution</h2>

                    <p>
                        Simply paste your error or stack trace, and BugSense AI
                        analyzes it using multiple AI agents to explain the
                        problem, identify the root cause, and recommend
                        practical solutions.
                    </p>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;