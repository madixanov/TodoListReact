import logo from "../assets/images/nextstep.png";
import home_icon from "../assets/icons/home.svg";
import tasks_icon from "../assets/icons/tasks.png";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/index.css";

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="side-bar">
      <Link to="/" className="side-bar-header" >
        <img src={logo} alt="NextStep" className="logo" />
      </Link>
      <div className="side-bar-list">
        <Link to="/" className={`side-bar-list-item ${location.pathname === "/" ? "selected-page" : ""}`}>
          <img src={home_icon} alt="Home Icon" className="page-icon" />
          <span className="page-name">Home</span>
        </Link>

        <Link to="/tasks" className={`side-bar-list-item ${location.pathname === "/tasks" ? "selected-page" : ""}`}>
          <img src={tasks_icon} alt="Tasks Icon" className="tasks-icon" />
          <span className="page-name">Tasks</span>
        </Link>
      </div>
    </div>
  );
}
