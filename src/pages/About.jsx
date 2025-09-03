import { FaCodeMerge } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { myServices, personalSkills, personalStatistics } from "../utils/data";
import { useContact } from "../context/contactContext";

export default function About() {
    const { setViewContact } = useContact()

    return (
        <div id="about" className="min-h-screen justify-center px-4 md:px-20 flex flex-col gap-8 md:items-center" >
            <h1 className="text-sm">About Me</h1>

            <div className="flex flex-col md:flex-row gap-6 md:max-w-4xl">
                <div className="flex flex-col gap-4 md:w-1/2">
                    <div className="flex flex-col text-5xl font-bold">
                        <h1>Hi, I'm</h1>
                        <h1 className="text-green-500 dark:text-green-200">Kahfi</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-2 items-center">
                            <IoLocationSharp size={24} className="text-green-500 dark:text-green-200" />
                            Based in Bogor, Indonesia
                        </span>
                        <span className="flex gap-2 items-center">
                            <FaCodeMerge size={24} className="text-green-500 dark:text-green-200" />
                            ML Engineer & Software Engineer
                        </span>
                        <span className="flex gap-2 items-center">
                            <MdOutlineDateRange size={24} className="text-green-500 dark:text-green-200" />
                            ~ 1 Years of Experience
                        </span>
                    </div>
                    <div className="text-justify">
                        As a passionate developer and machine learning engineer based in Bogor, Indonesia, I bring a strong mix of analytical thinking and problem-solving skills to every project. With hands-on experience in Python, TensorFlow, PyTorch, and modern frameworks like React and Next.js, I focus on building intelligent, data-driven applications that deliver real impact — turning ideas into scalable and efficient solutions.
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setViewContact(true)} className="hoverable hover:dark:bg-green-200/80 hover:bg-green-500/50 p-4 bg-green-500 dark:bg-green-200 text-white dark:text-(--dark-bg) rounded-lg">
                            Get In Touch
                        </button>
                        <button id="toProjects4" className="hoverable p-4 border text-green-500 dark:text-green-200 border-green-500 dark:border-green-200 hover:text-green-500/50 hover:dark:text-green-200/80 hover:border-green-500/50 hover:dark:border-green-200/80 rounded-lg">
                            View Projects
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl text-green-500 dark:text-green-200">Key Skills</h1>
                        <div className="flex gap-2 flex-wrap">
                            {personalSkills.map((data, i) => (
                                <span key={i} className="text-xs py-2 px-4 border border-green-500 dark:border-green-200 hover:scale-110 transition-transform hover:rotate-5 text-green-500 dark:text-green-200 rounded-full">{data}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl text-green-500 dark:text-green-200">Services</h1>
                        <div className="flex flex-col gap-2 py-2">
                            {myServices.map((data, i) => (
                                <span key={i} className="flex gap-2 items-center">
                                    <GrFormNext size={24} className="text-green-500 dark:text-green-200" />
                                    {data}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
                {personalStatistics.map((data, i) => (
                    <div key={i} className="hover:scale-110 transition-all duration-300 border rounded-lg dark:border-green-200 border-green-500 hover:dark:text-green-200 hover:text-green-500 p-6 flex flex-col gap-1"> 
                        <h1 className="text-3xl">{data.number}</h1>
                        <h3 className="text-xs">{data.desc}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}