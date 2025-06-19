import { FaHandPointRight } from "react-icons/fa";
import Projects from "../components/Projects";
import { personalProjects } from "../utils/data";

export default function Showcase()
{
    return (
        <>
            <div className="flex flex-col gap-4 text-black dark:text-white">
                <div className="group flex justify-between items-center pr-4">
                    <h1 className="font-bold text-2xl">Favorite Projects</h1>
                    <a href="https://github.com/nrkahfirhmd" target="_blank" className="flex items-center gap-2 cursor-pointer hover:underline">
                        Show All
                        <FaHandPointRight className="group-hover:w-6 group-hover:h-6 transition-all duration-300" />
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    { personalProjects.map((data, index) => (
                        <Projects
                            key={index}
                            screenshot={data.screenshot}
                            name={data.name}
                            desc={data.desc}
                            skills={data.skills}
                            sources={data.sources}
                        />
                    )) }
                </div>
            </div>
        </>
    )
}