import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong, FaLinkedin, FaMedium } from "react-icons/fa6";
import { githubLink, linkedinLink, mediumLink } from "../utils/data";
import { useContact } from "../context/contactContext";

export default function Footer()
{
    const { setViewContact } = useContact();

    return (
        <div className="pt-12 px-4 md:px-20">
            <div className="w-full rounded-md p-2 border-1 border-(--light-fg)/25 dark:border-(--dark-fg)/25 gap-8 md:gap-4 flex flex-col overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:p-12">
                    <div className="font-bold flex flex-col">
                        <div className="text-lg md:text-2xl max-w-xs">
                            Where <span className="text-green-500 dark:text-green-200">aesthetics</span> & <span className="text-green-500 dark:text-green-200">efficiency</span> meet
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-green-500 dark:text-green-200 font-bold">Explore</h1>
                        <div className="flex flex-col gap-2">
                            <div id="toHero2" className="hoverable hover:text-green-500 hover:dark:text-green-200 transition-color duration-300">
                                Home
                            </div>
                            <div id="toAbout3" className="hoverable hover:text-green-500 hover:dark:text-green-200 transition-color duration-300">
                                About Me
                            </div>
                            <div id="toExperiences" className="hoverable hover:text-green-500 hover:dark:text-green-200 transition-color duration-300">
                                Experiences
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-green-500 dark:text-green-200 font-bold">Follow Me</h1>
                        <div className="flex flex-col gap-2">
                            <a href={linkedinLink} target="_blank" className="hoverable flex gap-1 hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 items-center">
                                <FaLinkedin size={20} />
                                LinkedIn
                            </a>
                            <a href={githubLink} target="_blank" className="hoverable flex gap-1 hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 items-center">
                                <FaGithub size={20} />
                                Github
                            </a>
                            <a href={mediumLink} target="_blank" className="hoverable flex gap-1 hover:text-green-500 hover:dark:text-green-200 transition-color duration-300 items-center">
                                <FaMedium size={20} />
                                Medium
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-end text-base md:text-xl">
                        <div className="py-4 flex gap-4 w-full items-center justify-between border-b-2 border-green-500 dark:border-green-200">
                            <div className="flex flex-col">
                                <h1 className="font-bold">Contact Me</h1>
                                <h2 className="text-xs">Say Hello!</h2>
                            </div>
                            <div onClick={() => setViewContact(true)} className="hoverable border border-2 border-grey p-2 rounded-full hover:text-green-500 hover:dark:text-green-200">
                                <FaArrowRightLong className="size-4 md:size-6"/>
                            </div>
                        </div>
                        <div className="py-4 flex w-full gap-4 items-center justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold">My Projects</h1>
                                <h2 className="text-xs">Explore Projects</h2>
                            </div>
                            <div id="toProjects3" className="hoverable border border-2 border-grey p-2 rounded-full hover:text-green-500 hover:dark:text-green-200">
                                <FaArrowRightLong className="size-4 md:size-6"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden dark:flex w-full md:translate-y-[25px] justify-center">
                    <img src="nrkahfirhmd-dark.svg" alt="nrkahfirhmd" className="w-full" />
                </div>
                <div className="dark:hidden w-full md:translate-y-[25px] flex justify-center">
                    <img src="nrkahfirhmd-light.svg" alt="nrkahfirhmd" className="w-full" />
                </div>
            </div>
            <div className="my-2 md:my-0 py-2 md:px-4 flex flex-col gap-2 text-xl md:text-base md:flex-row justify-between items-center text-sm md:text-base text-green-500 dark:text-green-200">
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