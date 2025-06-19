export default function Record({logo, duration, company, position, desc})
{
    return (
        <div className="flex gap-4 py-4 px-8">
            <div className="w-17 flex justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden z-5">
                    <img src={logo} alt="Company Logo" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
                <h6 className="text-xs">{ duration }</h6>
                <h1 className="text-xl font-bold">{ company }</h1>
                <h3 className="text-sm">{ position }</h3>

                <ol className="text-justify text-xs">
                    {desc.map((data, index) => (
                        <li key={index} className="flex gap-2">
                            <span className="h-full">•</span>
                            {data}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}