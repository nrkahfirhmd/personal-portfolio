import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Showcase from "./pages/Showcase"
import Experiences from "./pages/Experiences"
import About from "./pages/About"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function App()
{
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        })

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            <div className="flex flex-col gap-12">
                <Hero/>
                <About/>
                <Experiences />
                {/* <Skills/> */}
                <Showcase/> 
            </div>
        </>
    )
}