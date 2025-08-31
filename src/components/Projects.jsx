import { FaGithub } from "react-icons/fa";

export default function Projects({ screenshot, name, desc, skills, sources })
{
    return (
        <div className="group flex w-full h-100 rounded-lg overflow-hidden max-w-6xl">
            <div className="w-full p-4 flex flex-col gap-4 items-between">
                <h2 className="text-5xl font-bold">{name}</h2>
                <p className="text-sm">{desc}</p>
                <div className="flex gap-1 flex-wrap">
                    { skills.map((data, index) => (
                        <div key={index} className="text-sm flex gap-1 items-center py-2 px-3 border border-black dark:border-white w-fit rounded-full">
                            {data}
                        </div>
                    )) }
                </div>

                <div className="flex gap-2">
                    { sources.map((data, index) => (
                        <a href={data.link} target="_blank" key={index} className="text-sm flex gap-1 items-center py-2 px-3 bg-black dark:bg-white w-fit rounded-full cursor-pointer text-white dark:text-black">
                            {data.icon}
                            {data.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full shadow-sm flex justify-center overflow-hidden rounded-lg">
                <img src={screenshot} alt="Showcase" className="w-full h-full object-cover shadow-lg transition-all duration-300" />
            </div>
        </div>
    )
}