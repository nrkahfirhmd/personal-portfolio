import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";
import About from "./pages/About";

export default function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-8 h-screen overflow-y-auto flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </div>
  )
}