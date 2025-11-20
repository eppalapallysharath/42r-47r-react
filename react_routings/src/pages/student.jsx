import { useParams } from "react-router-dom"
export const Student = () =>{
    const {id} = useParams()
    const students = [ { id:1, name:"sharath", class:"10th"},{id:2,name:"jerry", class:"11th"} ]

    const data = students.find(v => v.id = id)
    return <div>
        <h1>this student page</h1>
        <p>name {data.name}</p>
        <p>id {data.id}</p>
        <p>class {data.class}</p>
    </div>
}