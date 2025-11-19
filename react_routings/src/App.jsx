import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/errorpage";
import { Navbar } from "./components/navbar";
import {About} from "./pages/about"
function App () {
  return <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </>
}

export default App;