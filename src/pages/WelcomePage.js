import React from 'react';
import './WelcomePage.css';
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div id="main">
            <div id="leftHalf">
                <img id="dogIMG" src='/images/financebuddy_logo.png' alt="Dog" />
            </div>
            <div id="rightHalf">
                <h1>Welcome to FinanceBuddy!</h1>
                <p>
                Your all purpose finance friend to help you with your CashFlow, budget, and more!
                Need help tracking your scholarship eligibility? FinanceBuddy has an all intensive
                tool to track your GPA, eligibility, and more! FinanceBuddy has everything a student
                needs to no longer worry about tracking their finances.
                </p>
                <Link to="/LogIn" id="logInButton">Log In</Link>
            </div>
        </div>
    );
}
