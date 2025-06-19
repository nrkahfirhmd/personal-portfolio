import { FaGithub } from "react-icons/fa";

export default function Projects({ screenshot, name, desc, skills, sources })
{
    return (
        <div className="group w-full h-100 border-2 border-black dark:border-white rounded-lg shadow-sm shadow-black dark:shadow-white overflow-hidden">
            <div className="h-2/5 shadow-sm shadow-black dark:shadow-white flex justify-center overflow-hidden">
                <img src={screenshot} alt="Showcase" className="w-3/4 h-full object-cover m-5 shadow-lg shadow-black dark:shadow-white transition-all duration-300 group-hover:m-2" />
            </div>

            <div className="p-4 h-3/5 flex flex-col gap-4 items-between">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-xs">{desc}</p>
                <div className="flex gap-1 flex-wrap">
                    { skills.map((data, index) => (
                        <div key={index} className="text-[8px] flex gap-1 items-center px-2 py-1 border border-black dark:border-white w-fit rounded-full">
                            {data}
                        </div>
                    )) }
                </div>

                <div className="flex gap-2">
                    { sources.map((data, index) => (
                        <a href={data.link} target="_blank" key={index} className="text-xs flex gap-1 items-center px-2 py-1 bg-black dark:bg-white w-fit rounded-full cursor-pointer text-white dark:text-black">
                            {data.icon}
                            {data.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}