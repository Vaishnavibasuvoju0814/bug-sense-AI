import "../css/TechStack.css";

function TechStack() {

    const technologies = [
        "React",
        "Django",
        "Django REST",
        "CrewAI",
        "LangChain",
        "Gemini 2.5",
        "PostgreSQL",
        "ChromaDB"
    ];

    return (
        <section className="tech-stack">

            <h2>Built With Modern Technologies</h2>

            <div className="tech-grid">

                {technologies.map((tech, index) => (

                    <div className="tech-card" key={index}>
                        {tech}
                    </div>

                ))}

            </div>

        </section>
    );
}

export default TechStack;