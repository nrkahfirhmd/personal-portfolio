import { FaHandPointRight } from "react-icons/fa";
import Projects from "../components/Projects";

export default function Showcase()
{
    return (
        <>
            <div className="flex flex-col gap-4 text-black dark:text-white">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">Favorite Projects</h1>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        Show All
                        <FaHandPointRight />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    < Projects />
                    < Projects />
                    < Projects />
                    < Projects />
                    < Projects />
                </div>
            </div>
        </>
    )
}