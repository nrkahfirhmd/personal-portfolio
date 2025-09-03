import { personalEducation } from "../utils/data";
import Record from "./Record";

export default function Education()
{
    return (
        <>
            <div className="w-full relative md:py-4">
                <div className="relative flex flex-col gap-4">
                    <div className="w-[4px] h-full bg-green-500 dark:bg-green-200 absolute md:left-15"></div>

                    {personalEducation.map((data, index) => (
                        <Record 
                            key={index}
                            logo={data.logo}
                            duration={data.duration}
                            company={data.company}
                            position={data.position}
                            headline={data.headline}
                            desc={data.desc}
                        />
                    ))}
                </div>
                <div className="border-l-4 border-dashed border-green-500 dark:border-green-200 h-10 md:translate-x-15"></div>
            </div>
        </>
    )
}