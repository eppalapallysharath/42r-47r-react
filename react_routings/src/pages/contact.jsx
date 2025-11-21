import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Contact = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const submitMessage = (e) =>{
        e.preventDefault();
       navigate("/thankyou", {state:{username:name, email:email}})
    }

    return <form>
        <h3>Give a message</h3>
        <p>Name</p>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} value={name} />
        <p>email</p>
        <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <p>Message</p>
        <textarea rows={2} cols={20} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <div>
            <button onClick={submitMessage}>submit your message</button>
        </div>
    </form>
}