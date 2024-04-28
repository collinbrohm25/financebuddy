import "./LogIn.css";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    // Redirect if user is already logged in
    useEffect(() => {
        if (userData.token) {
            navigate("/loggedin");
        };
    }, [userData, navigate]);

    const [formData, setFormData] = useState({
        email:'', // the username is referred to as email as a holdover from the example code
        password:'',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Send log in request to server
            const response = await axios.post('http://localhost:8085/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            // Store the authentication token in local storage
            localStorage.setItem("auth-token", response.data.token);
            navigate("/loggedin");
        } catch (error) {
            console.error('Login failed:', error);
            // HANDLE LOGIN ERROR HERE
            // Print error component and clear login
            // username and password did not match
        }
    };
    
    
    return (
        <form onSubmit={handleLogin} onChange={handleChange} className="LogIn">
            <div className="formSections">
            <label for="user">Username:</label>
            <input id="user" name="user"></input>
            </div>
            <div className="formSections">
            <label for="pass">Password:</label>
            <input id="pass" name="pass"></input>
            </div>
            <div className="formSections">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    );
};