import { FaCodeMerge } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

export default function About() {
    return (
        <div className="px-4 md:px-20 flex flex-col gap-8 md:items-center" >
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
                            AI Engineer
                        </span>
                        <span className="flex gap-2 items-center">
                            <MdOutlineDateRange size={24} className="text-green-500 dark:text-green-200" />
                            ~ 1 Years of Experience
                        </span>
                    </div>
                    <div className="text-justify">
                        As a dedicated developer based in the heart of Bavaria, I bring German precision and creative innovation to every project. I specialize in creating robust, scalable web applications that combine cutting-edge technology with intuitive user experiences.
                    </div>
                    <div className="flex gap-2">
                        <button className="p-4 bg-green-500 dark:bg-green-200 text-white dark:text-(--dark-bg) rounded-lg">
                            Get In Touch
                        </button>
                        <button className="p-4 border text-green-500 dark:text-green-200 border-green-500 dark:border-green-200 rounded-lg">
                            View Projects
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl text-green-500 dark:text-green-200">Key Skills</h1>
                        <div className="flex gap-2 flex-wrap">
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                            <span className="py-2 px-4 border border-green-500 dark:border-green-200 text-green-500 dark:text-green-200 rounded-full">React</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl text-green-500 dark:text-green-200">Services</h1>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-2 items-center">
                                <GrFormNext size={24} className="text-green-500 dark:text-green-200" />
                                Automation Engineer
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
                <div className="border rounded-lg dark:border-green-200 border-green-500 p-6 flex flex-col gap-1"> 
                    <h1 className="text-3xl dark:text-green-200 text-green-500">Junior</h1>
                    <h3 className="text-xs">Professional Level</h3>
                </div>
                <div className="border rounded-lg dark:border-green-200 border-green-500 p-6 flex flex-col gap-1"> 
                    <h1 className="text-3xl dark:text-green-200 text-green-500">10+</h1>
                    <h3 className="text-xs">Projects Completed</h3>
                </div>
                <div className="border rounded-lg dark:border-green-200 border-green-500 p-6 flex flex-col gap-1"> 
                    <h1 className="text-3xl dark:text-green-200 text-green-500">Junior</h1>
                    <h3 className="text-xs">Professional Level</h3>
                </div>
                <div className="border rounded-lg dark:border-green-200 border-green-500 p-6 flex flex-col gap-1"> 
                    <h1 className="text-3xl dark:text-green-200 text-green-500">Junior</h1>
                    <h3 className="text-xs">Professional Level</h3>
                </div>
                <div className="border rounded-lg dark:border-green-200 border-green-500 p-6 flex flex-col gap-1"> 
                    <h1 className="text-3xl dark:text-green-200 text-green-500">Junior</h1>
                    <h3 className="text-xs">Professional Level</h3>
                </div>
            </div>
        </div>
    )
}