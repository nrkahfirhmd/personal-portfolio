import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ProjectsDetail({ screenshot, name, desc, skills, sources, setActive })
{
    return (
        <div onClick={() => setActive(false)} className="top-0 left-0 h-screen w-screen fixed flex flex-col gap-4 justify-center items-center z-10 px-2 backdrop-blur-md">
            <div className="md:w-2xl flex flex-col shadow-md bg-(--light-bg) dark:bg-(--dark-bg) p-5 rounded-lg gap-4 animate-pop">
                <div className="rounded-lg overflow-hidden">
                    <img src={screenshot} alt="Showcase" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-green-500 dark:text-green-200">{name}</h1>
                    <p className="text-xs md:text-sm">{desc}</p>
                    <div className="flex gap-1 flex-wrap">
                        { skills.map((data, index) => (
                            <div key={index} className="text-xs md:text-sm flex gap-1 items-center py-2 px-3 border border-black dark:border-white w-fit rounded-full">
                                {data}
                            </div>
                        )) }
                    </div>

                    <div className="flex gap-2">
                        { sources.map((data, index) => (
                            <a href={data.link} target="_blank" key={index} className="text-xs md:text-sm flex gap-1 items-center py-2 px-3 bg-black dark:bg-white w-fit text-white dark:text-black rounded-full cursor-pointer">
                                {data.icon}
                                {data.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div onClick={() => setActive(false)} className="flex items-center justify-center text-green-500 dark:text-green-200">
                <IoIosCloseCircleOutline size={64} />
            </div>
        </div>
    )
}