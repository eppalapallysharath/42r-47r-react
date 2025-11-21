import { useNavigate, useLocation } from "react-router-dom"

export const Dashboard = () =>{
    const navigate =  useNavigate()
    console.log(useLocation())
    const {state} = useLocation()

    const handleLogout = () =>{
        navigate("/")
    }
    return <div>
        <p>this dashboard page</p>
        <p>welcome to {state.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
}