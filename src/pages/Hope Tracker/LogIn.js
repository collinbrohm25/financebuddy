import "./LogIn.css";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();

    function handleChange(event) {
        event.preventDefault();

        navigate("/loggedin");
    };
    
    
    return (
        <form onSubmit={handleChange} className="LogIn">
            <label for="user">Username:</label>
            <input id="user" name="user" value=""></input>
            <br />
            <label for="pass">Password:</label>
            <input id="pass" name="pass" value=""></input>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    );
};