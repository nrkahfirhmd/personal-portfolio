import Experience from "../components/Experience";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";
import { current_habits, experience } from "../utils/data";

export default function About() {
    return (
        <>
            <Terminal>
                <TerminalLine command="ps aux">
                    <p className="text-[#808080]">
                        currently: 
                        <ul>
                            {current_habits.map((item, i) => (
                                <li key={i} className="before:content-['-'] before:px-2">{item}</li>
                            ))}
                        </ul>
                    </p>
                </TerminalLine>
                <TerminalLine command="ls la ./experience">
                    <div className="flex flex-col gap-6">
                        {experience.map((item, i) => (
                            <Experience
                                key={i}
                                role={item.role}
                                company={item.company}
                                start={item.start}
                                end={item.end}
                                jobdesc={item.jobdesc}
                            />
                        ))}
                    </div>
                </TerminalLine>
            </Terminal>
        </>
    )
}