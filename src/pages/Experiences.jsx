import { useState } from "react"
import Education from "../components/Education";
import Works from "../components/Works";

export default function Experiences() 
{
    const [selected, setSelected] = useState(0);

    return (
        <>
            <div className="text-black dark:text-white flex flex-col gap-4">
                <h1 className="font-bold text-2xl">My Experience</h1>
                <div className="flex rounded-md overflow-hidden cursor-pointer p-1 border">
                    <div className={`w-1/2 flex justify-center items-center rounded-md text-xs py-2 ${selected == 0 ? "bg-gray-600 dark:bg-gray-200 text-white dark:text-black" : ""}`}
                        onClick={() => setSelected(0)}
                    >
                        Work
                    </div>
                    <div className={`w-1/2 flex justify-center items-center rounded-md text-xs py-2 ${selected == 1 ? "bg-gray-600 dark:bg-gray-200 text-white dark:text-black" : ""}`}
                        onClick={() => setSelected(1)}
                    >
                        Education
                    </div>
                </div>

                <div>
                    {selected == 1 ? (<Education/>) : (<Works/>) }
                </div>
            </div>
        </>
    )
}