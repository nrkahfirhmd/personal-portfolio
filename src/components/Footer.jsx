import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer()
{
    return (
        <div className="pt-12">
            <div className="h-[1px] w-full bg-black dark:bg-white"></div>
            <div className="py-2 flex justify-between items-center text-black dark:text-white text-sm md:text-base">
                <div className="font-black">
                    <div>Nurkahfi</div>
                    <div>Amran Rahmada.</div>
                </div>
                
                <p className="font-light text-xs">&copy; 2025</p>

                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/nrkahfirhmd/" target="_blank">
                        <FaLinkedin className="w-6 h-6 cursor-pointer" />
                    </a>
                    <a href="https://github.com/nrkahfirhmd" target="_blank">
                        <FaGithub className="w-6 h-6 cursor-pointer" />
                    </a>
                    <a href="mailto:nurkahfirahmada@gmail.com" target="_blank">
                        <MdEmail className="w-6 h-6 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    )
}