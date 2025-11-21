import {Link, useLocation} from "react-router-dom"

export const Thankyou = () => {
    const  urlInfo = useLocation()
    return <div>
        <h3>thank you for submitting form {urlInfo?.state?.username}</h3>
        <p>you'll shortly get mail to this provided email {urlInfo?.state?.email}</p>
        <Link to="/"> Return to home </Link>
    </div>
}