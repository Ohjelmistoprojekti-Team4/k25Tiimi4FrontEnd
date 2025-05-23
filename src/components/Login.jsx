import React, { useState } from "react";
import './Login.css';
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Login() {

    const navigate = useNavigate()


    const [errorMessage, setErrorMessage] = useState("")
    const [form, setForm] = useState({
        username: "",
        password: "",
    })



    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch("https://k25-tiimi4-op1.2.rahtiapp.fi/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", //including jsessionid cookie
                body: JSON.stringify({
                    username: form.username,
                    password: form.password,
                }),
            });

            if (response.ok) {

                localStorage.setItem("isLoggedIn", "true");
                if (localStorage.getItem("isLoggedIn") === "true") {
                    console.log("User is logged in");
                }

                try {
                    // stores the userId to localstorage
                    const userResponse = await fetch("https://k25-tiimi4-op1.2.rahtiapp.fi/api/users/profile", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Accept": "application/json",
                        }
                    });
                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        //savae the users id
                        localStorage.setItem("userId", userData.userId);
                        console.log("user ID saved to localstorage: ", userData.userId);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setErrorMessage("Failed to load user data");
                }



                //luodaan ja lähetetään mukautettu event
                const event = new Event("loginEvent");
                window.dispatchEvent(event);

                navigate("/")

            } else if (response.status === 401) {
                setErrorMessage("Invalid credentials")
            } else {
                setErrorMessage("Login failed")
            }
        } catch (err) {
            console.error("Login error:", err)
            console.log("error: ", err)
            setErrorMessage("Network or server error")
        }
    }



    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="header">
                        <Typography variant="h2" className="text">Login</Typography>
                        {errorMessage && <p className="error">{errorMessage} </p>}
                        <div className="underline"></div>
                    </div>
                    <div>
                        <div className="inputs">

                            <div className="input">
                                <input type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input">
                                <input type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="submit-container">
                                <div>
                                    <button type="submit"
                                        className="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="register-link" style={{ textAlign: "center", marginTop: "1rem" }}>
                            <p>
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    style={{ fontWeight: "bold", color: "#8B5E3C", textDecoration: "none" }}
                                >
                                    Register
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;