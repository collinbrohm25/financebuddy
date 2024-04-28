/* Temporary 
    Pass props with proper username from form in final implementation
*/
import { useContext } from "react";
import "./LoggedIn.css";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const username = "default_user"; // switch from const if there are issues
const profileLink = '/images/financebuddy_logo.png'; /* change to external links, remember to use promises */

export default function LoggedIn() {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.removeItem('auth-token');
        navigate("/home");
    }

   return (
    <div id="main">
        <div className="halves">
            <img id="icon" src={profileLink} alt="Profile Pic" />
        </div>
        <div className="halves">
            <p>
                Welcome {username} to your Finance Buddy.
            </p>
            <button onCLick={handleLogout} id="logOutButton">Log Out</button>
        </div>
    </div>
   )
};
