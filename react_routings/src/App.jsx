import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/errorpage";
import { Navbar } from "./components/navbar";
import {About} from "./pages/about"
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import {ToastContainer} from "react-toastify"
import { Student } from "./pages/student";
import { Product } from "./pages/product";

function App () {
  return <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>}/> 
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/student/:id" element={<Student/>} />
      <Route path="/product/:id/:name" element={<Product/>}/>
    </Routes>
    <ToastContainer/>
  </>
}

export default App;