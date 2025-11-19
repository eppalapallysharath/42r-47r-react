import { Link } from "react-router-dom"

export const HomePage = () =>{
    return <div>
        <h2> this Home page </h2>
        <Link to={"/contact"}> Go to contact page </Link>
    </div>
}