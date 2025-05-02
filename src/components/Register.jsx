import React, { useState } from "react";
import './Login.css'
import {  useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";


function Register() {
    
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    });


    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                credentials: "include",
                body: new URLSearchParams({
                    firstname: form.firstname,
                    lastname: form.lastname,
                    email: form.email,
                    username: form.username,
                    password: form.password
                }),
            });

            if (response.ok) {
                localStorage.setItem("isLoggedIn", "true");
                navigate("/")
            } else if(response.status === 401) {
                setErrorMessage("Invalid credentials")
            } else {
                setErrorMessage("Login failed")
            }

        } catch (err) {
            console.error("Register error: ", err)
            console.log("error: ", err)
            setErrorMessage("Network or server error")
        }
    }

    return ( 
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="header">
                        <Typography variant="h2" className="text">Sign Up</Typography>
                        {errorMessage && <p className="error">{errorMessage} </p>}
                        <div className="underline"></div>
                    </div>
                    <div>
                        <div className="inputs">
                            
                            <div className="input">
                                <input type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="input">
                                <input type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={form.lastname}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="input">
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
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
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                       <div className="register-link" style={{ textAlign: "center", marginTop: "1rem" }}>
                            <p>
                                Do you have an account?{" "}
                                <Link
                                    to="/login"
                                    style={{ fontWeight: "bold", color: "#8B5E3C", textDecoration: "none" }}
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Register;