import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer()
{
    return (
        <div className="pt-4">
            <div className="h-[1px] w-full bg-black dark:bg-white"></div>
            <div className="py-2 flex justify-between items-center text-black dark:text-white">
                <div className="font-black">
                    <div>Nurkahfi</div>
                    <div>Amran Rahmada.</div>
                </div>
                
                <p className="font-thin text-xs">&copy; 2025</p>

                <div className="flex gap-2">
                    <FaLinkedin className="w-6 h-6 cursor-pointer" />
                    <FaGithub className="w-6 h-6 cursor-pointer" />
                    <MdEmail className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}