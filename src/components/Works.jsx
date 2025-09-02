import { personalWorks } from "../utils/data";
import Record from "./Record";

export default function Works()
{
    return (
        <>
            <div className="w-full rela tive md:py-4">
                <div className="relative flex flex-col gap-4">
                    <div className="w-[4px] h-full bg-green-500 dark:border-green-200 dark:bg-white absolute md:left-15"></div>

                    {personalWorks.map((data, index) => (
                        <Record 
                            key={index}
                            logo={data.logo}
                            duration={data.duration}
                            company={data.company}
                            position={data.position}
                            desc={data.desc}
                        />
                    ))}
                </div>
                <div className="border-l-4 border-dashed border-green-500 dark:border-green-200 dark:border-white h-10 md:translate-x-15"></div>
            </div>
        </>
    )
}