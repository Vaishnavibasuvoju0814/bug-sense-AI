import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Home.css";

import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

function Home() {

    const navigate = useNavigate();

    const goToAnalyze = () => {
        navigate("/analyze");
    };

    const scrollToFeatures = () => {
        const section = document.getElementById("features");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <Navbar />

            <section className="hero">

                <h1>BugSense AI</h1>

                <h2>Your AI debugging companion.</h2>

                <p>
                    Turn confusing errors into clear solutions.
                </p>

                <div className="buttons">

                    <button onClick={goToAnalyze}>
                        Analyze Now
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={scrollToFeatures}
                    >
                        Learn More
                    </button>

                </div>

            </section>

            <div id="features">
                <FeaturesSection />
            </div>

            <HowItWorks />

            <TechStack />

            <Footer />

        </>
    );
}

export default Home;