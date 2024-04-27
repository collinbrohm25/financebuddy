import "./error.css"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div>
            <h1 className="msg">Page not Found!</h1>
            <p className="ptxt">Go to the <Link className="custom" to="/">Home page</Link></p>
        </div>
    )

}