import { useState } from 'react'
import './Components.css'
import { FaChevronDown } from 'react-icons/fa';

export default function Sidebar() {
    const [open, setIsOpen] = useState(true);

    return (
        <div className={`${open ? "bg-white h-dvh" : ""} z-50 sticky lg:w-[20%] w-full top-0`}>
            <div className="w-full h-full lg:h-dvh gap-2 flex flex-col lg:border-r border-black">
                <div className='bg-white flex w-full justify-between border-b lg:border-none border-black relative'>
                    <div className={`h-full w-full flex lg:flex-col lg:p-6 gap-4 lg:justify-center lg:items-center ${open ? "flex-col px-6 py-4" : "items-center p-2"}`}>
                        <div className={`${open ? "w-25" : "w-15"} lg:w-40 rounded-full overflow-hidden transition-all transition-500`}>
                            <img src="/photo.jpg" alt="potrait" className="" />
                        </div>
                        <div className='flex flex-col lg:text-center gap-1'>
                            <h1 className='uppercase tracking-widest flex gap-2'>
                                Nurkahfi <p className={`${open ? "block" : "hidden"} lg:block`}>Rahmada</p> 
                            </h1>
                            <h2 className={`text-sm ${open ? "block" : "hidden"}`}>
                                Growing Developer
                            </h2>
                        </div>
                    </div>
                    
                    <div onClick={() => setIsOpen(!open)} className={`lg:hidden flex flex-col gap-2 h-full w-[25px] items-center absolute p-6 top-0 right-0 ${open ? "" : "justify-center"}`}>
                        <FaChevronDown size={20} className={`${open ? "rotate-180" : ""} transition-all transition-500`} />
                    </div>
                </div>

                {
                    open && (
                        <div className={`flex flex-col gap-2 h-dvh`}>
                            <div className="lg:block h-full">
                                <ul className="flex flex-col text-sm">
                                    <li className="nav">index</li>
                                    <li className="nav ">experience</li>
                                    <li className="nav">creation</li>
                                    <li className="nav">about</li>
                                </ul>
                            </div>

                            <div className="p-6 text-sm text-center flex flex-col gap-2 justify-end">
                                <p>&copy; 2026</p>
                                <p className='text-xs'>No generative AI was used in the creation of this website.</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}