// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

export default function App() {
  const location = useLocation();
  const pageName = location.pathname === "/" ? "Home" : "Tasks";

  return (
    <div className="layout">
      <SideBar />
      <div className="main-content">
        <Header pageName={pageName} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
