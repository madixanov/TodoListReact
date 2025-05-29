import logo from "../assets/images/nextstep.png"
import home_icon from "../assets/icons/home.svg"
import tasks_icon from "../assets/icons/tasks.png"
import '../assets/styles/index.css'

export default function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <img src={logo} alt="NextStep" className="logo" />
            </div>
            <div className="side-bar-list">
                <div className="side-bar-list-item selected-page">
                    <img src={home_icon} alt="Home Icon" className="page-icon" />
                    <span className="page-name">Home</span>
                </div>
                <div className="side-bar-list-item">
                    <img src={tasks_icon} alt="Tasks Icon" className="tasks-icon" />
                    <span className="page-name">Tasks</span>
                </div>
            </div>
        </div>
    )
}