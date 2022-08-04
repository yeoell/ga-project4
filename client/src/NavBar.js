import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Workflow from "./Workflow";
import Login from "./Login";
import Contact from "./Contact";
// import SignIn from "./SignIn";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
        <ul className="nav">
          <button>
            <Link to="/">workflow</Link>
          </button>
          <button>
            <Link to="/contact">contact us</Link>
          </button>
          <button>
            <Link to="login">login</Link>
          </button>
        </ul>

        <Routes>
          <Route path="/" element={<Workflow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
