import "./SignUp.css";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const signUpData = {
            password: e.target.pass.value,
            confirmPassword: e.target.confirm.value,
            username: e.target.user.value
        }
        
        try {
            // Send sign up request to server
            await axios.post('http://localhost:8085/signup', signUpData);
            navigate("/login");
        } catch (error) {
            console.error('Login failed:', error);
            // HANDLE LOGIN ERROR HERE
            // Print error component and clear login
            // username and password did not match
        }
        
    };
    
    return (
        <form onSubmit={handleSignUp} className="SignUp">
            <div className="formSections">
            <label for="user">Username:</label>
            <input id="user" name="user" value=""></input>
            </div>
            <div className="formSections">
            <label for="pass">Password:</label>
            <input id="pass" name="pass" value=""></input>
            </div>
            <div className="formSections">
            <label for="confirm">Confirm Password:</label>
            <input id="confirm" name="confirm" value=""></input>
            </div>
            <div className="formSections">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    );
};