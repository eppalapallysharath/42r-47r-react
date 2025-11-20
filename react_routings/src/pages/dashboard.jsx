import { useNavigate } from "react-router-dom"

export const Dashboard = () =>{
    const navigate =  useNavigate()

    const handleLogout = () =>{
        navigate("/")
    }
    return <div>
        <p>this dashboard page</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
}