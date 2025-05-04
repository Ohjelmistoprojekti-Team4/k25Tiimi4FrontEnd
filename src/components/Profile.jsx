import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/users/profile", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return response.json();
            })
            .then((data) => setUserData(data))
            .catch((error) => {
                console.error("Error fetching user data:", error);
                setErrorMessage("Failed to load user data");
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        const event = new Event("logoutEvent");
        window.dispatchEvent(event);
        navigate("/login");
    };

    const handleDeleteAccount = async () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            try {
                const response = await fetch("http://localhost:8080/api/users/delete", {
                    method: "DELETE",
                    credentials: "include",
                });

                if (response.ok) {
                    alert("Your account has been deleted.");
                    handleLogout();
                } else {
                    alert("Failed to delete account. Please try again.");
                }
            } catch (error) {
                console.error("Error deleting account:", error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    if (!userData) {
        return <p className="error-message">{errorMessage || "Loading..."}</p>;
    }

    return (
        <div className="profile-container">
            <h2 className="profile-header">Profile</h2>
            <div className="profile-details">
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>First Name:</strong> {userData.firstname}</p>
                <p><strong>Last Name:</strong> {userData.lastname}</p>
            </div>
            <div className="profile-actions">
                <button onClick={handleDeleteAccount} className="delete-account-btn">
                    Delete Account
                </button>
            </div>
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
}

export default Profile;