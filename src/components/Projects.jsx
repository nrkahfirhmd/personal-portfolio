import { useState } from "react";
import ProjectsDetail from "./ProjectsDetail";

export default function Projects({ screenshot, name, role, desc, skills, sources })
{
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };
    
    return (
        <div className="px-4 group flex w-full items-center justify-center rounded-lg max-w-6xl relative">
            <div className="w-full p-4 md:flex flex-col gap-4 hidden items-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold">{name}</h2>
                    <p className="text-sm font-bold">{role}</p>
                </div>
                <p className="text-sm">{desc}</p>
                <div>
                    <button onClick={() => setActive(true)} className="hoverable py-2 px-4 rounded-lg border border-green-500 dark:border-green-200 hover:bg-green-500 hover:dark:bg-green-200 hover:text-(--light-bg) hover:dark:text-(--dark-bg) text-green-500 dark:text-green-200">
                        Show More
                    </button>
                </div>
            </div>

            <div onClick={toggleActive} className="relative w-full shadow-sm flex justify-center items-center overflow-hidden rounded-lg group">
                <h1 className={`absolute z-2 text-3xl font-bold
                        ${active ? "block" : "hidden group-hover:block"}
                    `}>
                    {name}
                </h1>
                <div className={`absolute w-full h-full z-1 bg-white/50 dark:bg-black/50
                        ${active ? "block" : "hidden group-hover:block"}
                    `} />
                <img src={screenshot} alt="Showcase" 
                    className={`w-full h-full object-cover shadow-lg transition-all duration-300 
                        ${active ? "scale-110 blur-sm" : "group-hover:scale-110 group-hover:blur-sm"}
                    `} />
            </div>

            {active && (
                <ProjectsDetail 
                    screenshot={screenshot}
                    name={name}
                    role={role}
                    desc={desc}
                    skills={skills}
                    sources={sources}
                    setActive={setActive}
                />
            ) }
        </div>
    )
}