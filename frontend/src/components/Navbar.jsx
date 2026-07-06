import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const username = localStorage.getItem("username");

    const handleFeaturesClick = () => {

        if (location.pathname !== "/") {

            navigate("/");

            setTimeout(() => {

                const section = document.getElementById("features");

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth",
                    });

                }

            }, 100);

        }

        else {

            const section = document.getElementById("features");

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth",
                });

            }

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");

        navigate("/login");

        window.location.reload();

    };

    return (

        <nav>

            <h2 className="logo">BugSense AI</h2>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <button
                    className="nav-btn"
                    onClick={handleFeaturesClick}
                >
                    Features
                </button>

                <Link to="/analyze">Analyze</Link>

                {username && (
                    <Link to="/history">History</Link>
                )}

                <Link to="/about">About</Link>

                {username ? (

                    <>

                        <span className="nav-user">
                            Hey, {username}
                        </span>

                        <button
                            className="nav-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </>

                ) : (

                    <>

                        <Link to="/login">Login</Link>

                        <Link to="/signup">Sign Up</Link>

                    </>

                )}

            </div>

        </nav>

    );

}

export default Navbar;