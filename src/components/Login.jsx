import React, { useState } from "react";
import './Login.css';
import { Typography } from "@mui/material";
import Footer from "./Footer";

function Login() {

    const [action, setAction] = useState("Sign Up")

    return (
        <div className="login-page">
        <div className="container">
            <div className="header">
                <Typography variant="h2" className="text">{action}</Typography>
                <div className="underline"></div>
            </div>
            <div>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <>
                            <div className="input">
                                <input type="text" placeholder="First name" />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Last name" />
                            </div>
                        </>
                    )}
                    <div className="input">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <input type="password" placeholder="Password" />
                    </div>

                    <div className="submit-container">
                        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        </div>
    )
}

export default Login;