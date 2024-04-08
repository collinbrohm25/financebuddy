/* Temporary 
    Pass props with proper username from form in final implementation
*/
import "./LoggedIn.css";

const username = "default_user"; // switch from const if there are issues
const profileLink = '/images/financebuddy_logo.png'; /* change to external links, remember to use promises */

export default function LoggedIn() {
   return (
    <div id="main">
        <div className="halves">
            <img id="icon" src={profileLink} alt="Profile Pic" />
        </div>
        <div className="halves">
            <p>
                Welcome {username} to your Finance Buddy.
            </p>
        </div>
    </div>
   )
};