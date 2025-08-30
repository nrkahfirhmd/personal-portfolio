import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer()
{
    return (
        <div className="pt-12">
            <div className="w-full rounded-md p-2 border-1 border-(--light-fg)/25 dark:border-(--dark-fg)/25 gap-8 md:gap-4 flex flex-col overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:p-12">
                    <div className="font-bold flex flex-col">
                        <div className="text-lg md:text-2xl max-w-xs">
                            Where <span className="text-green-200">aesthetics</span> & <span className="text-purple-200">efficiency</span> meet
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-pink-200">Explore</h1>
                        <div className="flex flex-col gap-2">
                            <div>
                                Home
                            </div>
                            <div>
                                About Me
                            </div>
                            <div>
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-orange-200">Follow Me</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 items-center">
                                <FaLinkedin size={20} />
                                LinkedIn
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaGithub size={20} />
                                Github
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaMedium size={20} />
                                Medium
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end text-base md:text-xl">
                        <div className="py-4 flex gap-4 w-full items-center justify-between border-b-1 border-green-400">
                            <div className="flex flex-col">
                                <h1 className="font-bold">Contact Me</h1>
                                <h2 className="text-xs">Say Hello!</h2>
                            </div>
                            <div className="border border-2 border-grey p-2 rounded-full">
                                <FaArrowRightLong className="size-4 md:size-6"/>
                            </div>
                        </div>
                        <div className="py-4 flex w-full gap-4 items-center justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold">My Projects</h1>
                                <h2 className="text-xs">Explore Projects</h2>
                            </div>
                            <div className="border border-2 border-grey p-2 rounded-full">
                                <FaArrowRightLong className="size-4 md:size-6"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:translate-y-[25px] flex justify-center">
                    <img src="nrkahfirhmd.svg" alt="nrkahfirhmd" className="w-full" />
                </div>
            </div>
            <div className="my-10 md:my-0 py-2 md:px-4 flex flex-col gap-2 text-xl md:text-base md:flex-row justify-between items-center text-sm md:text-base">
                <div className="font-medium">
                    nrkahfirhmd &copy;2025
                </div>

                <div className="font-medium">
                    Bogor, Indonesia
                </div>
            </div>
        </div>
    )
}