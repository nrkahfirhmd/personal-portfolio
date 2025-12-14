import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Creation from "./pages/Creation";
import MatrixBackground from "./components/MatrixBackground";
import Resume from "./pages/Resume";
import ThemeModal from "./components/ThemeModal";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <MatrixBackground/>
      <ThemeModal/>
      <Sidebar/>
      <div className="flex-1 p-8 min-h-screen overflow-y-scroll flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/experience" element={<About/>} />
          <Route path="/creation" element={<Creation/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
    </div>
  )
}