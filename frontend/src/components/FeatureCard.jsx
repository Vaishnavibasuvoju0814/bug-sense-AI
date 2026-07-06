import "../css/FeatureCard.css";

function FeatureCard({ title, description, emoji }) {
    return (
        <div className="feature-card">

            <div className="emoji">
                {emoji}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
    );
}

export default FeatureCard;