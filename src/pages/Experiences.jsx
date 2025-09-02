import { useState } from "react"
import Education from "../components/Education";
import Works from "../components/Works";

export default function Experiences() 
{
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4 w-5xl px-4">
                <h1 className="font-bold text-2xl text-center text-green-500 dark:text-green-200">My Experiences</h1>
                <div className="flex rounded-md overflow-hidden cursor-pointer p-1 border">
                    <div className={`w-1/2 flex justify-center items-center rounded-md text-xs py-2 font-bold ${selected == 0 ? "bg-green-500 dark:bg-green-200 text-(--light-bg) dark:text-(--dark-bg)" : ""}`}
                        onClick={() => setSelected(0)}
                    >
                        Career
                    </div>
                    <div className={`w-1/2 flex justify-center items-center rounded-md text-xs py-2 font-bold ${selected == 1 ? "bg-green-500 dark:bg-green-200 text-(--light-bg) dark:text-(--dark-bg)" : ""}`}
                        onClick={() => setSelected(1)}
                    >
                        Education
                    </div>
                </div>

                <div>
                    {selected == 1 ? (<Education/>) : (<Works/>) }
                </div>
            </div>
        </div>
    )
}