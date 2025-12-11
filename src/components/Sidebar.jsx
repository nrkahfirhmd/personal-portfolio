import './Components.css'

export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col h-screen justify-between p-10 w-70 border-r-[1px] border-[#808080]">
                <h1 className="font-bold text-[#00ffdd]">
                    nrkahfirhmd
                </h1>

                <ul className="text-sm gap-1 flex flex-col">
                    <li className="nav-list list-selected">index</li>
                    <li className="nav-list">about</li>
                    <li className="nav-list">work</li>
                    <li className="nav-list">now</li>
                </ul>

                <span className="flex flex-col gap-2">
                    <div className="h-[1px] w-full bg-[#808080]" />
                    <p className="text-xs text-[#808080]">
                        &copy; 2025
                    </p>
                </span>
            </div>
        </>
    )
}