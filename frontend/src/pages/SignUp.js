import "./SignUp.css";
import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    // State to manage form inputs
    const [formData, setFormData] = useState({
        password:'',
        username:'',
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup request to server
            await axios.post('http://localhost:8085/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8085/api/users/login', {
                username: formData.username,
                password: formData.password
            });
            // Update user data upon successful signup
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            navigate("/loggedin");
        } catch (error) {
            console.error('Signup failed:', error);
            alert("Sign up failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange} className="SignUp">
            <div className="formSections">
            <label for="user">Username:</label>
            <input id="user" name="username"></input>
            </div>
            <div className="formSections">
            <label for="pass">Password:</label>
            <input id="pass" name="password"></input>
            </div>
            <div className="formSections">
            <label for="confirm">Confirm Password:</label>
            <input id="confirm" name="confirmPassword"></input>
            </div>
            <div className="formSections">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    );
};