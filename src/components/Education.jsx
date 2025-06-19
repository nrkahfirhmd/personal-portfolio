import { personalEducation } from "../utils/data";
import Record from "./Record";

export default function Education()
{
    return (
        <>
            <div className="w-full border border-black dark:border-white rounded-lg relative">
                <div className="w-[1px] h-full bg-black dark:bg-white absolute left-15"></div>
                
                {personalEducation.map((data, index) => (
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
        </>
    )
}