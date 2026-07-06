import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

import "../css/Auth.css";

function Signup() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password) => {
        if (password.length < 8)
            return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(password))
            return "Password must contain an uppercase letter.";
        if (!/[a-z]/.test(password))
            return "Password must contain a lowercase letter.";
        if (!/[0-9]/.test(password))
            return "Password must contain a number.";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
            return "Password must contain a special character.";
        return null;
    };

    const getStrength = () => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

        if (score <= 2) return "Weak";
        if (score <= 4) return "Medium";
        return "Strong";
    };

    const handleSignup = async () => {
        const error = validatePassword(password);
        if (error) {
            alert(error);
            return;
        }

        try {
            const response = await API.post("/signup/", {
                username,
                email,
                password
            });

            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                alert("Something went wrong.");
            }
        }
    };

    return (
        <>
            <Navbar />

            <div className="auth-container">
                <div className="auth-card">
                    <h1>Create Account</h1>
                    <p>Join BugSense AI today</p>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="show-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {password.length > 0 && (
                        <>
                            <div className="password-strength">
                                Strength:
                                <span className={getStrength().toLowerCase()}>
                                    {" "}{getStrength()}
                                </span>
                            </div>

                            <div className="password-rules">
                                <p className={password.length >= 8 ? "valid" : ""}>
                                    ✓ At least 8 characters
                                </p>
                                <p className={/[A-Z]/.test(password) ? "valid" : ""}>
                                    ✓ One uppercase letter
                                </p>
                                <p className={/[a-z]/.test(password) ? "valid" : ""}>
                                    ✓ One lowercase letter
                                </p>
                                <p className={/[0-9]/.test(password) ? "valid" : ""}>
                                    ✓ One number
                                </p>
                                <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : ""}>
                                    ✓ One special character
                                </p>
                            </div>
                        </>
                    )}

                    <button className="submit-btn" onClick={handleSignup}>
                        Sign Up
                    </button>

                    <div className="auth-footer">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Signup;