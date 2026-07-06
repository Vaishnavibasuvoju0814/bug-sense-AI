import "../css/HowItWorks.css";

function HowItWorks() {
    return (
        <section className="how-it-works">

            <h2>How It Works</h2>

            <div className="steps">

                <div className="step">
                    <div className="step-number">1</div>
                    <h3>Paste Your Error</h3>
                    <p>Paste your error message, stack trace or application log.</p>
                </div>

                <div className="step">
                    <div className="step-number">2</div>
                    <h3>AI Understands</h3>
                    <p>BugSense AI analyzes the error and understands the context.</p>
                </div>

                <div className="step">
                    <div className="step-number">3</div>
                    <h3>Find Root Cause</h3>
                    <p>Identify why the issue occurred instead of just showing the error.</p>
                </div>

                <div className="step">
                    <div className="step-number">4</div>
                    <h3>Get Smart Solutions</h3>
                    <p>Receive explanations and practical fix suggestions.</p>
                </div>

            </div>

        </section>
    );
}

export default HowItWorks;