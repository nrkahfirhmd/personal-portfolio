import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";
import { resume_link } from "../utils/data";

export default function Resume() {
    return (
        <>
            <Terminal>
                <TerminalLine command="cat resume.pdf">
                    <div className="h-140">
                        <iframe src={resume_link} className="w-full h-full flex-1 rounded-md"></iframe>
                    </div>
                </TerminalLine>
            </Terminal>
        </>
    )
}