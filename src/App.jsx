import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Showcase from "./pages/Showcase"
import Experiences from "./pages/Experiences"

export default function App()
{
    return (
        <>
            <div className="flex flex-col gap-12">
                <Hero/>
                <Experiences />
                <Skills/>
                <Showcase/>
            </div>
        </>
    )
}