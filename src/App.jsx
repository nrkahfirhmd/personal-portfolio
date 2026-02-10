import { MdOutlineOpenInNew } from "react-icons/md";
import Sidebar from "./components/Sidebar";
import Stars from "./components/Stars";

export default function App() {
    return (
        <>
            <div className="min-h-dvh bg-(--color-background) flex flex-col lg:flex-row">
                <Sidebar/>

                <div className="w-full min-h-dvh">
                    <div className="flex flex-col px-8 py-12 lg:px-20 lg:py-16 gap-12 lg:gap-24 w-full h-full">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex w-full flex-col gap-2">
                                <h1 className="font-bold text-xl lg:text-4xl">Kahfi is a software developer who builds smart, scalable, and high impact solutions through his specialization in Software Engineering and Artificial Intelligence</h1>
                                <p className="text-sm lg:text-xl">Hi there, this site is my personal log where I share my experience as a growing developer. In this site you will see my collection of work, thoughts, journey, even my museum of failure. If you interested in getting to know me more, just hit the button below</p>
                            </div>

                            <div>
                                <button className="rounded-lg bg-gray-200 p-3 cursor-pointer"> 
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4 w-full h-120 overflow-hidden">
                            <div className="border-2 border-blue-500 w-full lg:w-[35%] h-full rounded-lg p-4 flex flex-col gap-6">
                                <div className="flex gap-2 justify-between items-center">
                                    <h4>
                                        CV
                                    </h4>
                                    <span>
                                        <MdOutlineOpenInNew size={20} />
                                    </span>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <span className="flex gap-2 items-center">
                                            <h1 className="font-bold">
                                                Prabu 2025
                                            </h1>
                                            <h6 className="bg-gray-200 p-[3px] text-xs rounded-lg">
                                                2025
                                            </h6>
                                        </span>
                                        <h2 className="text-sm">
                                            Frontend Developer
                                        </h2>
                                    </div>

                                    <div>
                                        <span className="flex gap-2 items-center">
                                            <h1 className="font-bold">
                                                Prabu 2025
                                            </h1>
                                            <h6 className="bg-gray-200 p-[3px] text-xs rounded-lg">
                                                2025
                                            </h6>
                                        </span>
                                        <h2 className="text-sm">
                                            Frontend Developer
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="relative bg-black text-white rounded-lg w-full h-full overflow-hidden p-4 gap-4 flex flex-col">
                                <div className="flex gap-2 justify-between items-center">
                                    Featured
                                </div>

                                <div className="relative">
                                    <div className="flex flex-col gap-4 z-2 relative">
                                        <h1 className="font-bold lg:text-2xl">
                                            My Personal Gallery of Trying
                                        </h1>
                                        <button className="p-2 lg:p-4 rounded-lg bg-blue-200 w-fit text-black cursor-pointer">
                                            Take a Look!
                                        </button>
                                    </div>
                                    
                                    <div>
                                        <img src="/globe.png" alt="Globe" className="z-2 relative" />
                                    </div>

                                    <div className="glow" />
                                </div>
                                
                                <Stars/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}