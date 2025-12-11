import Project from "../components/Project";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";

export default function Creation() {
    return (
        <>
            <Terminal>
                <TerminalLine command="ps aux">
                    <p>
                        <p>my interests:</p>
                        <p>backend, systems, machine learning, artificial intelligence</p>
                    </p>
                </TerminalLine>
                <TerminalLine command="ls ./projects --featured">
                    <div className="flex flex-col gap-4">
                        <Project
                            name={"Text2SQL"}
                            desc={"yapping"}
                            links={[
                                {
                                    "platform": "github",
                                    "link": "kadieu.com"
                                },
                                {
                                    "platform": "live",
                                    "link": "didieu.com"
                                }
                            ]}
                        />
                    </div>
                </TerminalLine>
            </Terminal>
        </>
    )
}