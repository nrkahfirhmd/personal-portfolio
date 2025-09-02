import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle()
{
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === "dark" ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    })
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        setIsSpinning(true);

        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        setTimeout(() => setIsSpinning(false), 500)
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`hoverable cursor-pointer bg-white p-3 rounded-full dark:bg-black transition-transform duration-300 hover:scale-110 ${isSpinning ? "animate-spinz" : ""}`}
        >
            {darkMode ? <MdSunny /> : <IoMdMoon />}
        </button>
    )
}