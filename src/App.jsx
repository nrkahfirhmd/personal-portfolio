import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Showcase from "./pages/Showcase"
import Experience from "./pages/Experience"

export default function App()
{
    return (
        <>
            <div className="flex flex-col gap-12">
                <Hero/>
                <Experience />
                <Skills/>
                <Showcase/>
            </div>
        </>
    )
}