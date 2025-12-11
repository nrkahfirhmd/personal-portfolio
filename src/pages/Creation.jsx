import Project from "../components/Project";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";
import { interests, projects } from "../utils/data";

export default function Creation() {
    return (
        <>
            <Terminal>
                <TerminalLine command="ps aux">
                    <p className="text-[#808080]">
                        <p>my interests:</p>
                        <p>{interests}</p>
                    </p>
                </TerminalLine>
                <TerminalLine command="ls ./projects --featured">
                    <div className="flex flex-col gap-4">
                        {projects.map((item, i) => (
                            <Project
                                key={i}
                                name={item.name}
                                desc={item.desc}
                                links={item.links}
                            />
                        ))}
                    </div>
                </TerminalLine>
            </Terminal>
        </>
    )
}