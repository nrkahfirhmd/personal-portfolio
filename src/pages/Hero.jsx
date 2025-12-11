import AsciiDonut from "../components/Donut";
import DailyQuotes from "../components/Quotes";

export default function Hero() {
    return (
        <>
            <div className="p-6 rounded-xl shadow-sm shadow-[#00ffdd]">
                <div className="py-4 flex gap-4 justify-between items-center border-b-[1px] border-[#808080]">
                    <span className="flex gap-2">
                        <span className="rounded-full w-[12px] h-[12px] bg-red-400" />
                        <span className="rounded-full w-[12px] h-[12px] bg-yellow-400" />
                        <span className="rounded-full w-[12px] h-[12px] bg-green-400" />
                    </span>
                    <h3>
                        terminal@nrkahfirhmd:~
                    </h3>
                    <p className="text-[#808080]">
                        &gt;_
                    </p>
                </div>
                <div className="py-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <p className="flex gap-2 text-sm">
                            <span className="text-[#00ffdd]">$</span> whoami
                        </p>
                        <div className="p-4 w-full h-full flex gap-2">
                            <div>
                                <AsciiDonut/>
                            </div>
                            <div className="flex flex-col justify-between">
                                <span>
                                    <h1 className="text-2xl">Nurkahfi Amran Rahmada</h1>
                                    <h3 className="text-[#808080]">Software AI Engineer</h3>
                                    <h3 className="text-[#808080] text-lg">Computer Science Undergrad @ Padjadjaran University</h3>
                                </span>
                                <span className="text-sm flex gap-2 underline">
                                    <a className="hover:text-[#808080] cursor-pointer">github</a>
                                    <a className="hover:text-[#808080] cursor-pointer">resume</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="flex gap-2 text-sm">
                            <span className="text-[#00ffdd]">$</span> cat bio.txt
                        </p>
                        <p className="text-[#808080]">
                            i have a love-hate relationship with code. sometimes i get a dopamine surge from it, but other times it makes me frustrated. yet, i'm addicted to solving complex challenges and building AI-powered solutions. this site is my personal log: a collection of work, thoughts, even my journey.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="flex gap-2 text-sm">
                            <span className="text-[#00ffdd]">$</span> curl https://api.meaningful-quotes.com
                        </p>
                        <span className="text-[#808080]">
                            <DailyQuotes/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}