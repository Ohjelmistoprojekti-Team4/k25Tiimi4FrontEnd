import React, { useState } from "react";
import './Login.css';
import { Box, TextField } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [errors, setErrors] = useState({});
    const [user, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        passwordAgain: '',
    });
    const [action, setAction] = useState("Sign Up");

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!user.firstName?.trim()) newErrors.firstName = 'First name is required';
        if (!user.lastName?.trim()) newErrors.lastName = 'Last name is required';
        if (!user.email?.includes('@')) newErrors.email = 'Give a valid email';
        if (!user.username?.trim()) newErrors.username = 'Username is required';
        if (!user.password) newErrors.password = 'Password is required';
        if (user.password.length < 4) newErrors.password = 'Password must be at least 4 characters';
        if (!user.passwordAgain) newErrors.passwordAgain = 'Give same password again';
        if (action === "Sign Up" && user.password !== user.passwordAgain) {
            newErrors.passwordAgain = 'Password do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const updateUser = (e) => {
        setValues({
            ...user,
            [e.target.name]: e.target.value
        });
        setMessage('');
    }

    const submitNewUser = () => {

        setMessage('User created');
        setValues({
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            passwordAgain: '',
        });
    }


    const handleLogin = () => {
        navigate('/products');
    }


    return (
        <div className="login-page">
            <div className="container">
                <div className="header">
                    <h2>{action}</h2>
                    <div className="underline"></div>
                </div>
                <div>
                    <div className="inputs">
                        <Box
                            component="form"
                            className="mui-form-wrapper"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '80%' }, display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            {action === "Sign Up" && (
                                <>
                                    <TextField
                                        required
                                        variant='outlined'
                                        label="First name"
                                        fullWidth
                                        value={user.firstName}
                                        onChange={(e) => updateUser(e)}
                                        name="firstName"
                                        size="small"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                        sx={{
                                            backgroundColor: '#fffbe6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                    <TextField
                                        required
                                        variant='outlined'
                                        label="Last name"
                                        fullWidth
                                        value={user.lastName}
                                        onChange={(e) => updateUser(e)}
                                        name="lastName"
                                        size="small"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                        sx={{
                                            backgroundColor: '#fffbe6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                    <TextField
                                        required
                                        variant='outlined'
                                        label="Email"
                                        fullWidth
                                        value={user.email}
                                        onChange={(e) => updateUser(e)}
                                        name="email"
                                        type="email"
                                        size="small"
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        sx={{
                                            backgroundColor: '#fffbe6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </>
                            )}
                            <TextField
                                required
                                variant='outlined'
                                label="Username"
                                fullWidth
                                value={user.username}
                                onChange={(e) => updateUser(e)}
                                name="username"
                                size="small"
                                error={!!errors.username}
                                helperText={errors.username}
                                sx={{
                                    backgroundColor: '#fffbe6',
                                    borderRadius: '4px'
                                }}
                            />
                            <TextField
                                required
                                variant='outlined'
                                label="Password"
                                fullWidth
                                value={user.password}
                                onChange={(e) => updateUser(e)}
                                name="password"
                                type="password"
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password}
                                sx={{
                                    backgroundColor: '#fffbe6',
                                    borderRadius: '4px'
                                }}
                            />
                            {action === "Sign Up" && (
                                <TextField
                                    required
                                    variant='outlined'
                                    label="Enter password again"
                                    fullWidth
                                    value={user.passwordAgain}
                                    onChange={(e) => updateUser(e)}
                                    name="passwordAgain"
                                    type="password"
                                    size="small"
                                    error={!!errors.passwordAgain}
                                    helperText={errors.passwordAgain}
                                    sx={{
                                        backgroundColor: '#fffbe6',
                                        borderRadius: '4px'
                                    }}
                                />
                            )}

                            <div className="submit-container">
                                <div className={action === "Login" ? "submit gray" : "submit"}
                                    onClick={() => {
                                        if (action === "Sign Up") {
                                            if (validateForm()) {
                                                submitNewUser();
                                            }
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
                        </Box>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login;