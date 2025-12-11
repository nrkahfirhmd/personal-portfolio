import Experience from "../components/Experience";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";

export default function About() {
    return (
        <>
            <Terminal>
                <TerminalLine command="ps aux">
                    <p>
                        currently: 
                        <ul>
                            <li className="before:content-['-'] before:px-2">re-exploring my interest</li>
                            <li className="before:content-['-'] before:px-2">improving my english</li>
                        </ul>
                    </p>
                </TerminalLine>
                <TerminalLine command="ls la ./experience">
                    <div className="flex flex-col gap-6">
                        <Experience
                            role={"transformation office"}
                            company={"Tunas Group"}
                            start={"aug 2025"}
                            end={"dec 2025"}
                            jobdesc={["mandi", "makan"]}
                        />
                    </div>
                </TerminalLine>
            </Terminal>
        </>
    )
}