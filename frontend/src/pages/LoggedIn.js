/* Temporary 
    Pass props with proper username from form in final implementation
*/
import { useContext } from "react";
import "./LoggedIn.css";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

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
            <img id="logoIMG" src='/images/financebuddy_logo.png' alt="Logo" />
        </div>
        <div className="halves">
            <p>
                Welcome to your Finance Buddy.
            </p>
            <button onClick={handleLogout} id="logOutButton">Log Out</button>
        </div>
    </div>
   )
};
