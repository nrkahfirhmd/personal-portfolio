import { IoClose } from "react-icons/io5";
import { CVLink } from "../utils/data";

export default function Viewer({ setView }) {
    return (
        <div onClick={() => setView(false)} className="fixed z-10 flex items-center justify-center h-screen w-screen backdrop-blur-sm px-2">
            <div onClick={(e) => e.stopPropagation()} className="overflow-hidden shadow-lg w-2xl h-[90%] bg-(--light-bg) dark:bg-(--dark-bg) animate-pop rounded-lg">
                <div className="p-8 border-b border-black/50 dark:border-white/50 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Curriculum Vitae</h1>
                    <div className="grid place-items-center" onClick={() => setView(false)}>
                        <IoClose size={24} />
                    </div>
                </div>
                <div className="p-4 flex overflow-hidden h-full">
                    <div className="w-full h-full overflow-hidden">
                        <iframe src={CVLink} className="w-full h-full flex-1 rounded-md"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}