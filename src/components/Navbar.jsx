import { useContact } from "../context/contactContext"
import ThemeToggle from "./ThemeToggle"

export default function Navbar()
{
    const { setViewContact } = useContact()

    return (
        <div className="w-full flex py-2 md:px-20 px-4 backdrop-blur-[4px] text-xl fixed justify-between items-center z-10">
            <div id="toHero" className="hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 italic hoverable font-black">
                KV.
            </div>

            <div className="flex gap-8 items-center">
                <a id="toAbout" className="hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 md:block hoverable hidden">About</a>
                <a id="toProjects" className="hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 md:block hoverable hidden">Work</a>
                <p onClick={() => setViewContact(true)} className="hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 md:block hoverable hidden">Contact</p>
                <ThemeToggle/>
            </div>
        </div>
    )
}