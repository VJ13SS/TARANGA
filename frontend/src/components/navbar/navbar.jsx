import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const { currentSection, setCurrentSection } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <nav>
      <span className="nav-left" onClick={() => navigate("/")}>
        <i>TARANGA</i>
      </span>
      <ul className="nav-links">
        <li
          style={currentSection === "home" ? { border: "2px solid white" } : {}}
        >
          <i>
            <Link
              to="/"
              style={linkStyle}
              onClick={() => setCurrentSection("home")}
            >
              Home
            </Link>
          </i>
        </li>
        <li
          style={
            currentSection === "about" ? { border: "2px solid white" } : {}
          }
        >
          <i>
            <Link
              to="/about"
              style={linkStyle}
              onClick={() => setCurrentSection("about")}
            >
              About
            </Link>
          </i>
        </li>
        <li
          style={
            currentSection === "events" ? { border: "2px solid white" } : {}
          }
        >
          <i>
            <Link
              to="/events"
              style={linkStyle}
              onClick={() => setCurrentSection("events")}
            >
              Events
            </Link>
          </i>
        </li>

        <li
          style={
            currentSection === "leaderBoard"
              ? { border: "2px solid white" }
              : {}
          }
        >
          <i>
            <Link
              to="/leaderBoard"
              style={linkStyle}
              onClick={() => setCurrentSection("leaderBoard")}
            >
              LeaderBoard
            </Link>
          </i>
        </li>
      </ul>
      <a href="https://elacsta-website.vercel.app/" className="nav-right">
        <i>Elacsta</i>
      </a>
    </nav>
  );
}
