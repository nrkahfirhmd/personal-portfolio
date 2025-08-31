import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Showcase from "./pages/Showcase"
import Experiences from "./pages/Experiences"
import About from "./pages/About"

export default function App()
{
    return (
        <>
            <div className="flex flex-col gap-12">
                <Hero/>
                <About/>
                {/* <Experiences />
                <Skills/>
                <Showcase/> */}
            </div>
        </>
    )
}