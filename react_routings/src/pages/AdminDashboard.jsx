import { Outlet, Link } from "react-router-dom"
export const TeacherHomepage = () => { 
    return <div>
        <ul>
           <Link to="/teacher/dashboard"> <li> Dashboard</li></Link>
          <Link to={"/teacher/profile"}> <li>Profile</li></Link>
        </ul>
        <Outlet/>
    </div>
}