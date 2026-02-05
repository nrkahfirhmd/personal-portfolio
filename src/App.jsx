import Sidebar from "./components/Sidebar";

export default function App() {
    return (
        <>
            <div className="min-h-dvh bg-(--color-background) flex flex-col lg:flex-row">
                <Sidebar/>

                <div className="w-full h-dvh">
                    {/* <div className="flex flex-col gap-4 px-20 py-16 gap-4 w-full h-full">
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="font-bold text-4xl">Kahfi is a software developer who builds smart, scalable, and high impact solutions through his specialization in Software Engineering and Artificial Intelligence</h1>
                            <p className="text-xl">Hi there, this site is my personal log where I share my experience as a growing developer. In this site you will see my collection of work, thoughts, journey, even my gallery of failure. If you interested in getting to know me more, just hit the button below</p>
                        </div>

                        <div>
                            <button className="rounded-lg bg-gray-200 p-3 cursor-pointer"> 
                                Learn More
                            </button>
                        </div>

                        <div>
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}