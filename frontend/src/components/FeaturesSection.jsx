import FeatureCard from "./FeatureCard";
import "../css/FeaturesSection.css";

function FeaturesSection() {

    return (

        <section className="features">

            <h2>Why Choose BugSense AI?</h2>

            <div className="feature-grid">

                <FeatureCard
                    emoji="🐞"
                    title="Smart Error Detection"
                    description="Identify errors from stack traces and logs quickly."
                />

                <FeatureCard
                    emoji="🧠"
                    title="Root Cause Analysis"
                    description="Understand why the error happened instead of guessing."
                />

                <FeatureCard
                    emoji="💡"
                    title="AI Fix Suggestions"
                    description="Receive practical suggestions to solve issues faster."
                />

                <FeatureCard
                    emoji="⚡"
                    title="Save Development Time"
                    description="Spend less time debugging and more time building."
                />

            </div>

        </section>

    );

}

export default FeaturesSection;