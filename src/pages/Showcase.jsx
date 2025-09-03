import Projects from "../components/Projects";
import { personalProjects } from "../utils/data";

export default function Showcase()
{
    return (
        <div id="projects" className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="group flex justify-between items-center px-4">
                    <h1 className="font-bold text-xl md:text-2xl text-green-500 dark:text-green-200 ">Favorite Projects</h1>
                    <a href="https://github.com/nrkahfirhmd" target="_blank" className="text-(--dark-bg) bg-green-500 dark:bg-green-200 py-2 px-4 rounded lg flex items-center gap-2 cursor-pointer hover:underline">
                        Show All
                    </a>
                </div>
                <div className="grid gap-4 place-items-center">
                    { personalProjects.map((data, index) => (
                        <Projects
                            key={index}
                            screenshot={data.screenshot}
                            name={data.name}
                            role={data.role}
                            desc={data.desc}
                            skills={data.skills}
                            sources={data.sources}
                        />
                    )) }
                </div>
            </div>
        </div>
    )
}