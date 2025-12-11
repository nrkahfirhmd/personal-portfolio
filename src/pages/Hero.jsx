import AsciiDonut from "../components/Donut";
import DailyQuotes from "../components/Quotes";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";

export default function Hero() {
    return (
        <>
            <Terminal>
                <TerminalLine command="whoami">
                    <div className="p-4 w-full h-full flex gap-2">
                        <div>
                            <AsciiDonut/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <span>
                                <h1 className="text-2xl">Nurkahfi Amran Rahmada</h1>
                                <h3 className="text-[#808080]">Software AI Engineer</h3>
                                <h3 className="text-[#808080] text-lg">Computer Science @ Padjadjaran University</h3>
                            </span>
                            <span className="text-sm flex gap-2 underline">
                                <a className="hover:text-[#808080] cursor-pointer">github</a>
                                <a className="hover:text-[#808080] cursor-pointer">resume</a>
                            </span>
                        </div>
                    </div>
                </TerminalLine>
                <TerminalLine command="cat bio.txt">
                    <p className="text-[#808080]">
                        i have a love-hate relationship with code. sometimes i get a dopamine surge from it, but other times it makes me frustrated. yet, i'm addicted to solving complex challenges and building AI-powered solutions. this site is my personal log: a collection of work, thoughts, even my journey.
                    </p>
                </TerminalLine>
                <TerminalLine command="curl https://api.meaningful-quotes.com">
                    <span className="text-[#808080]">
                        <DailyQuotes/>
                    </span>
                </TerminalLine>
            </Terminal>
        </>
    )
}