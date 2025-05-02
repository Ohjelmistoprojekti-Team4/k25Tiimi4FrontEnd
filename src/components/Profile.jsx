import React from "react";
import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        //poistaa kirjautumistilan localStoragesta
        localStorage.removeItem("isLoggedIn");

        //luodaan ja lähetetääj mukautettu tapahtuma
        const event = new Event("logoutEvent");
        window.dispatchEvent(event);

        navigate("/login")
    };

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;