import Hero from "./pages/Hero"
import Showcase from "./pages/Showcase"
import Experiences from "./pages/Experiences"
import About from "./pages/About"
import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

export default function App()
{
    const lenisRef = useRef()
    const rafId = useRef()

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        })

        function raf(time) {
            lenisRef.current?.raf(time);
            rafId.current = requestAnimationFrame(raf);
        }
        rafId.current = requestAnimationFrame(raf)

        document.querySelector('#toHero').addEventListener('click', () => { lenisRef.current.scrollTo('#hero') }) 

        document.querySelector('#toAbout').addEventListener('click', () => { lenisRef.current.scrollTo('#about') }) 
        document.querySelector('#toAbout2').addEventListener('click', () => { lenisRef.current.scrollTo('#about') }) 
        
        document.querySelector('#toProjects').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })
        document.querySelector('#toProjects2').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current)

            lenisRef.current?.destroy()
        }
    }, [])

    return (
        <>
            <div className="flex flex-col gap-12">
                <Hero/>
                <About/>
                <Experiences />
                <Showcase/> 
            </div>
        </>
    )
}