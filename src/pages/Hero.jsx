import AsciiDonut from "../components/Donut";
import DailyQuotes from "../components/Quotes";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";
import { bio, career, github_link, portfolio_ver, resume_link, role } from "../utils/data";

export default function Hero() {
    return (
        <>
            <Terminal>
                <TerminalLine command="whoami">
                    <div className="lg:p-4 w-full h-full flex gap-2">
                        <div className="hidden lg:block">
                            <AsciiDonut/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <span>
                                <h1 className="text-2xl">Nurkahfi Amran Rahmada</h1>
                                <h3 className="text-[#808080]">{role}</h3>
                                <h3 className="text-[#808080] text-lg">{career}</h3>
                            </span>
                            <span className="text-sm flex gap-2 underline">
                                <a href={github_link} target="_blank" className="hover:text-[#808080] cursor-pointer">github</a>
                                <a href={resume_link} target="_blank" className="hover:text-[#808080] cursor-pointer">resume</a>
                            </span>
                        </div>
                    </div>
                </TerminalLine>
                <TerminalLine command="cat bio.txt">
                    <p className="text-[#808080]">
                        {bio}
                    </p>
                </TerminalLine>
                <TerminalLine command="curl https://api.meaningful-quotes.com">
                    <span className="text-[#808080]">
                        <DailyQuotes/>
                    </span>
                </TerminalLine>
                <TerminalLine command="portfolio --version">
                    <p className="text-[#808080] text-xs">last update: {portfolio_ver}</p>
                </TerminalLine>
            </Terminal>
        </>
    )
}