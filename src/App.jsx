import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
    <div className="layout">
      <SideBar />
      <div className="main-content">
        <Header />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
    </>
  )
}