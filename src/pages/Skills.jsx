import { techStack } from "../utils/data";

export default function Skills()
{
    return (
        <>
            <div className="flex flex-col gap-4 text-black dark:text-white">
                <h1 className="font-bold text-2xl">Tech Stack</h1>
                <div className="flex gap-2 flex-wrap">
                    {techStack.map((data, index) => (
                        <div key={index} className="flex gap-2 items-center px-4 py-2 rounded-full border border-black dark:border-white max-w-fit select-none hover:border-blue-200 transition-all duration-300 hover:text-blue-200">
                            {data.icon}
                            {data.label}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}