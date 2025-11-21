import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify"

export const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleLogin = (e) =>{
        e.preventDefault()
        const users = [{email: "sharath@gmail.com", password:"123456",role:"student"}, {email:"tom@gmail.com", password:"tom123", role:"teacher"}] 
        const data = users.find(item => item.email === email && item.password === password)
     
        if(data){
            if(data.role === 'student'){
                navigate("/dashboard", {state:{email}})
            }
            else if(data.role === "teacher"){
                navigate("/teacher/dashboard")
            }
        }
    }

    return <div>
        <form onSubmit={handleLogin}>
            <fieldset>
                <legend>Login</legend>
                <p>Email</p>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <p>Password</p>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                <div>
                    <button>Login</button>
                </div>
            </fieldset>
        </form>
    </div>
}