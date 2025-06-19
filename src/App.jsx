import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Showcase from "./pages/Showcase"

export default function App()
{
    return (
        <>
            <div className="flex flex-col gap-2">
                <Hero/>
                <Skills/>
                <Showcase/>
            </div>
        </>
    )
}