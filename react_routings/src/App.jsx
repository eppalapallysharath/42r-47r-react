import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/errorpage";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import { Student } from "./pages/student";
import { Product } from "./pages/product";
import { Thankyou } from "./pages/thankyou";
import { TeacherHomepage } from "./pages/AdminDashboard";
import { TeacherProfile } from "./pages/AdminProfile";
import { TeacherDashboard } from "./pages/teacheDashboard";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="student/:id" element={<Student />} />
          <Route path="product/:id/:name" element={<Product />} />
          <Route path="thankyou" element={<Thankyou />} />
        </Route>
        {/* nested routing */}
        <Route path="/teacher" element={<TeacherHomepage />}>
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="profile" element={<TeacherProfile />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
