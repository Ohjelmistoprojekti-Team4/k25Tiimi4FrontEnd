import React, { useState } from "react";
import './Login.css';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

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
            const response = await fetch("http://localhost:8080/perform-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                credentials: "include", //including jsessionid cookie
                body: new URLSearchParams({
                    username: form.username,
                    password: form.password,
                }),
            });
        
            if (response.ok) {
                navigate("/Home")
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
                                <a href="/Register"  style={{ fontWeight: "bold", color: "#8B5E3C", textDecoration: "none" }}>
                                Register
                                </a>
                            </p>
                            </div>

                </div>
            </div>

                <Footer />
                
            </form>
        </div>
        )
}

export default Login;