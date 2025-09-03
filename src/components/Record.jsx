export default function Record({logo, duration, company, position, headline, desc})
{
    return (
        <div className="flex gap-4 md:px-8">
            <div className="w-17 hidden md:flex justify-center">
                <div className="w-12 h-12 bg-white grid place-items-center outline-4 outline-green-500 dark:outline-green-200 rounded-full overflow-hidden z-5">
                    <img src={logo} alt="Company Logo" className="w-[75%] h-[75%] object-cover" />
                </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className="bg-(--light-bg) dark:bg-(--dark-bg) z-1 py-3 md:py-0 flex flex-col md:flex-row gap-2 justify-between md:items-center">
                    <div>
                        <h1 className="text-lg md:text-xl font-bold">{ company }</h1>
                        <h3 className="font-bold text-xs md:text-sm">{ position }</h3>
                    </div>
                    <h6 className="text-xs md:text-sm">{ duration }</h6>
                </div>
                
                <div className="pl-4 md:pl-0">    
                    <ol className="text-justify text-xs md:text-sm font-bold p-4 bg-green-500 dark:bg-green-200 rounded-lg text-(--light-bg) dark:text-(--dark-bg) flex flex-col gap-2">
                        { headline ? (
                            <li>
                                { headline }
                            </li>
                        ) : "" }
                        {desc.map((data, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="h-full">•</span>
                                {data}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}