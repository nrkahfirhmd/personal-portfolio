const Terminal = ({ children, title = "terminal@nrkahfirhmd:~" }) => {
    return (
        <div className="w-full rounded-xl shadow-sm shadow-[#00ffdd] border border-[#333] bg-[#0c0c0c]">
            <div className="px-6 py-4 flex gap-4 justify-between items-center border-b-[1px] border-[#333]">
                <span className="hidden lg:flex gap-2">
                    <span className="rounded-full w-[12px] h-[12px] bg-red-400/80" />
                    <span className="rounded-full w-[12px] h-[12px] bg-yellow-400/80" />
                    <span className="rounded-full w-[12px] h-[12px] bg-green-400/80" />
                </span>
                
                <h3 className="text-[#808080] text-sm tracking-wide">
                    {title}
                </h3>

                <p className="text-[#808080]">
                    &gt;_
                </p>
            </div>
            
            <div className="p-6 flex flex-col gap-6 text-gray-300">
                {children}
            </div>
        </div>
    );
};

export default Terminal;