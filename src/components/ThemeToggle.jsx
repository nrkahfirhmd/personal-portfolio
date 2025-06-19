import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle()
{
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === "dark" ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    })

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer dark:text-white text-black transition-transform duration-300 hover:scale-110"
        >
            {darkMode ? <MdSunny /> : <IoMdMoon />}
        </button>
    )
}