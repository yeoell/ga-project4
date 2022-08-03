import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Workflow from "./Workflow";
import Contact from "./Contact";

export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <button>
            <Link to="/">workflow</Link>
          </button>{" "}
          <br />
          <button>
            <Link to="contact">contact</Link>
          </button>
        </ul>

        <Routes>
          <Route path="/" element={<Workflow />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
