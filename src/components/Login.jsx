import React, { useState } from "react";
import './Login.css';
import { Typography } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    });
    const [action, setAction] = useState("Sign Up");

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const updateUser = (e) => {
        setValues({
            ...user,
            [e.target.name]: e.target.value
        });
        setMessage('');
    }

    const submitNewUser = () => {
        const { firstName, lastName, email, username, password } = user;

        if (!firstName || !lastName || !email || !username || !password) {
            setMessage('You should input a value in each field')
        } else {
            setMessage('User created');
            setValues({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
            });
        }
    }

    const handleLogin = () => {
        navigate('/products');
    }

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
                                    <input type="text" name="firstName" placeholder="First name" value={user.firstName} onChange={(e) => updateUser(e)} />
                                </div>
                                <div className="input">
                                    <input type="text" name="lastName" placeholder="Last name" value={user.lastName} onChange={(e) => updateUser(e)} />
                                </div>
                                <div className="input">
                                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => updateUser(e)} />
                                </div>
                            </>
                        )}
                        <div className="input">
                            <input type="text" name="username" placeholder="Username" value={user.username} onChange={(e) => updateUser(e)} />
                        </div>
                        <div className="input">
                            <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => updateUser(e)} />
                        </div>

                        <div className="submit-container">
                            <div className={action === "Login" ? "submit gray" : "submit"}
                                onClick={() => {
                                    if (action === "Sign Up") {
                                        submitNewUser();
                                    } else {
                                        setAction("Sign Up")
                                    }
                                }}
                            >Sign Up
                            </div>
                            <div className={action === "Sign Up" ? "submit gray" : "submit"}
                                onClick={() => {
                                    if (action === "Login") {
                                        handleLogin();
                                    } else {
                                        setAction("Login")
                                    }
                                }}
                            >Login
                            </div>
                        </div>
                        {message}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login;