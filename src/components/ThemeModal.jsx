import { useEffect, useState } from "react";

export default function ThemeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("default");

    const themes = [
        { id: "default", name: "Matrix Green", color: "#00ffdd" },
        { id: "green", name: "Forest Green", color: "#C6D870" },
        { id: "pink", name: "Pink Blossom", color: "#FFB8E0" },
        { id: "orange", name: "Orange Mandarine", color: "#FF9D23" },
    ]

    const applyTheme = (themeId) => {
        setCurrentTheme(themeId);
        localStorage.setItem("theme", themeId)

        if (themeId === "default") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", themeId);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "default";
        applyTheme(savedTheme)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.shiftKey && (e.key === "T" || e.key === "t")) {
                e.preventDefault();
                setIsOpen((prev) => !prev)
            }

            if (e.key === "Escape") setIsOpen(false);

            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                
                const currentIndex = themes.findIndex(t => t.id === currentTheme);

                let newIndex = 0

                if (e.key === "ArrowDown") {
                    newIndex = currentIndex + 1 > themes.length - 1 ? 0 : currentIndex + 1
                } else if (e.key === "ArrowUp") {
                    newIndex = currentIndex - 1 < 0 ? themes.length - 1 : currentIndex - 1
                }

                const targetTheme = themes[newIndex].id;
                applyTheme(targetTheme);
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentTheme, themes])

    if (!isOpen) return null;

    return (    
        <>
            <div className="fixed top-0 h-dvh w-dvw flex justify-center items-center bg-[var(--color-bg)]/75 z-10">
                <div className="w-100 bg-[var(--color-bg)] border border-[var(--color-primary)] rounded-lg p-2 flex flex-col gap-8">
                    <span className="text-center">
                        <h1 className="text-xl">
                            current theme
                        </h1>
                        <p className="text-xs text-[var(--color-text)]">[esc] to close</p>
                    </span>

                    <ul>
                        {themes.map((item, i) => (                            
                            <li key={i} className={`flex p-2 justify-between rounded-md gap-4 items-center ${item.id == currentTheme ? "bg-white text-black" : ""}`}>
                                <h3>{item.name}</h3>
                                <span className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}/>
                                </span>
                            </li>
                        ))}
                        <p className="text-center text-xs text-[var(--color-text)]">[^] up [v] down</p>
                    </ul>

                </div>
            </div>
        </>
    )
}