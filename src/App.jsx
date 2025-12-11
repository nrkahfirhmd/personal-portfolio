import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Creation from "./pages/Creation";

export default function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-8 min-h-screen overflow-y-scroll flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/experience" element={<About/>} />
          <Route path="/creation" element={<Creation/>} />
        </Routes>
      </div>
    </div>
  )
}