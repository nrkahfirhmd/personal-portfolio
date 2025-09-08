import Hero from "./pages/Hero"
import Showcase from "./pages/Showcase"
import Experiences from "./pages/Experiences"
import About from "./pages/About"
import { useEffect, useRef, useState } from "react"
import Lenis from "@studio-freight/lenis"
import { useContact } from "./context/contactContext"
import Contacts from "./components/Contacts"
import { AnimatePresence, motion } from "framer-motion"

export default function App()
{
    const lenisRef = useRef()
    const rafId = useRef()
    const { viewContact, setViewContact } = useContact()
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 1500);

        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            syncTouch: true
        })

        function raf(time) {
            lenisRef.current?.raf(time);
            rafId.current = requestAnimationFrame(raf);
        }
        rafId.current = requestAnimationFrame(raf)

        document.querySelector('#toHero').addEventListener('click', () => { lenisRef.current.scrollTo('#hero') }) 
        document.querySelector('#toHero2').addEventListener('click', () => { lenisRef.current.scrollTo('#hero') }) 

        document.querySelector('#toAbout').addEventListener('click', () => { lenisRef.current.scrollTo('#about') }) 
        document.querySelector('#toAbout2').addEventListener('click', () => { lenisRef.current.scrollTo('#about') }) 
        document.querySelector('#toAbout3').addEventListener('click', () => { lenisRef.current.scrollTo('#about') }) 

        document.querySelector('#toExperiences').addEventListener('click', () => { lenisRef.current.scrollTo('#experiences') }) 
        
        document.querySelector('#toProjects').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })
        document.querySelector('#toProjects2').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })
        document.querySelector('#toProjects3').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })
        document.querySelector('#toProjects4').addEventListener('click', () => { lenisRef.current.scrollTo('#projects') })

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current)

            lenisRef.current?.destroy()

            clearTimeout(timer);
        }
    }, [])

    return (
        <>
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: "-120%" }}
                        exit={{ y: "-120%" }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        className="fixed flex items-center justify-center bg-(--light-bg) dark:bg-(--dark-bg) text-(--light-fg) dark:text-(--dark-fg) z-9999 inset-0 shadow-lg"
                    >
                        <h1 className="font-bold text-4xl">WELCOME</h1>
                        <h1 className="text-6xl animate-greet">👋🏻</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-12">
                <Hero/>
                <About/>
                <Experiences />
                <Showcase/> 
                
                {viewContact && <Contacts setView={setViewContact} />}
            </div>
        </>
    )
}