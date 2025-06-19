import { FaGithub } from "react-icons/fa";

export default function Projects()
{
    return (
        <div className="w-full h-120 border-2 border-black dark:border-white rounded-lg shadow-sm shadow-white overflow-hidden">
            <div className="h-2/5 shadow-sm shadow-white">
                <img src="/src/assets/gs.png" alt="Showcase" className="w-full h-full object-cover" />
            </div>

            <div className="p-4 h-3/5 flex flex-col gap-4 items-between">
                <h2 className="text-lg font-bold">Nyisa</h2>
                <p className="text-xs">Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes</p>
                <div className="flex gap-1 flex-wrap">
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        Tensorflow
                    </div>
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        CNN
                    </div>
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        Transfer Learning
                    </div>
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        Fintech
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        < FaGithub />
                        Source
                    </div>
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        < FaGithub />
                        Source
                    </div>
                    <div className="text-xs flex gap-1 items-center px-2 py-1 border border-white w-fit rounded-full cursor-pointer">
                        < FaGithub />
                        Source
                    </div>
                </div>
            </div>
        </div>
    )
}