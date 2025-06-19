import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaFeatherPointed } from "react-icons/fa6"

export default function Hero()
{   
    return (
        <div className="py-16 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-center">
                <div className="h-full rounded-lg w-50 md:min-w-45">
                    <img src="/src/assets/profile.jpg" alt="profile" className="w-full h-full object-cover rounded-lg" />
                </div>

                <div className="flex flex-col gap-4 text-black dark:text-white w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-4xl">Hi! I am Kahfi!👋🏻</h3>
                        <h2 className="text-xl">AI Engineer & Data Analyst.</h2>
                    </div>
                    <p className="text-justify text-md">
                        A generalist who learns about everything that he find interesting. Always searching for meaning behind every step.
                        Accompany me in becoming a long life learner!
                    </p>
                    <div className="flex gap-1">
                        <p className="text-xs">
                            find my blog in <span className="underline cursor-pointer">here</span>
                        </p>
                        <FaFeatherPointed className="w-4 h-4" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="px-4 py-2 rounded-lg w-fit cursor-poiniter border border-black dark:border-white cursor-pointer">
                            See my CV!
                        </div>
                        <div className="px-2 py-2 border border-black dark:border-white rounded-full cursor-pointer">
                            <FaLinkedinIn />
                        </div>
                        <div className="px-2 py-2 border border-black dark:border-white rounded-full cursor-pointer">
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="gap-16 grid grid-cols-2 md:grid-cols-4 bg-blue-500 px-12 py-6 rounded-lg">
                {personalStatistics.map((data, index) => (
                    <span key={index} className="flex flex-col justify-center items-center">
                        <h1 className="text-6xl">{data.number}</h1>
                        <p className="text-xs">{data.desc}</p>
                    </span>
                ))}
            </div> */}
        </div>
    )
}