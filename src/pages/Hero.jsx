import { useEffect, useRef, useState } from "react"
import { peopleTestimony } from "../utils/data";
import { SiReaddotcv } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";
import Viewer from '../components/Viewer'

export default function Hero()
{   
    const [pos, setPos] = useState({ x: 0, y: 0});
    const cursorMask = useRef();
    const cursorVisible = useRef();
    const heroRef = useRef()
    const [view, setView] = useState(false);

    const onMouseMove = event => {
        const { clientX: x, clientY: y } = event;
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setPos({
            x: x - rect.left, 
            y: y - rect.top,
        });
        positionDot(event);
    };
    const onMouseEnter = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };
    const onMouseLeave = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    useEffect(() => {
        const hero = heroRef.current;
        hero?.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        
        return () => {
            hero?.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    function positionDot(e) {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX = e.clientX;
        endY = e.clientY;
        cursorMask.current.style.top = endY + "px";
        cursorMask.current.style.left = endX + "px";
    }

    function toggleCursorVisibility() {
        if (cursorVisible.current) {
            cursorMask.current.style.opacity = 1;
        } else {
            cursorMask.current.style.opacity = 0;
        }
    }

    return (
        <div className="relative min-h-screen grid place-items-center px-2" ref={heroRef}>
            <div className="absolute inset-0 bg-grid md:hidden"></div>
            <div
                className="absolute inset-0 bg-grid hidden md:block"
                ref={cursorMask}
                style={{
                    maskImage: `radial-gradient(200px at ${pos.x}px ${pos.y}px, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)`,
                    WebkitMaskImage: `radial-gradient(200px at ${pos.x}px ${pos.y}px, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)`,
                }}
            ></div>

            <div className="relative flex flex-col items-center justify-center max-w-6xl text-center gap-3 z-1">
                <h1 className="font-medium md:text-lg text-sm">Based in Indonesia</h1>
                <div className="text-5xl md:text-7xl font-medium">
                    <span className="text-green-500 dark:text-green-200">AI-Powered</span> Solutions, Engineered for <span className="text-green-500 dark:text-green-200">Impact</span>
                </div>
                <div className="text-sm md:text-lg">
                    I blend Artificial Intelligence and Software Engineering to build smart, scalable, and transformative products.
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setView(true)} className="relative overflow-hidden flex gap-1 md:gap-2 py-4 items-center px-4 md:px-6 bg-(--light-fg)/25 backdrop-blur-[2px] border-2 border-white/50 dark:border-black/50 dark:bg-(--dark-fg)/25 hover:bg-(--light-fg)/40 hover:dark:bg-(--dark-fg)/40 rounded-md group">
                        <SiReaddotcv size={24} className="group-hover:-rotate-z-50 transition-transform duration-300" />
                        See My CV
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-300 ease-in-out"></span>
                    </button>
                    <button className="py-4 px-4 md:px-6 rounded-md flex gap-1 md:gap-2 items-center">
                        See My Work
                        <FaAngleRight size={24} />
                    </button>
                </div>
                <div className="flex">
                    {peopleTestimony.map((data, i) => (
                        <div className="relative group" key={i}>
                            <div className={`size-12 rounded-full overflow-hidden border-2 border-(--light-bg) dark:border-(--dark-bg) ${i === 0 ? "" : "-ml-4"} hover:z-2 hover:scale-[1.1] transition-transform duration-300`}>
                                <img src={data.image} alt="testajah" className="w-full" />
                            </div>
                            <div className="absolute bottom-full w-max bg-(--light-bg)/50 shadow-md backdrop-blur-[3px] hidden group-hover:block text-(--light-fg) dark:bg-(--dark-bg)/50 dark:text-(--dark-fg) rounded-md p-2 text-black left-1/2 -translate-x-1/2 mb-2">
                                <div className="font-bold">
                                    {data.name}
                                </div>
                                <div className="text-xs">
                                    {data.message}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute flex items-center flex-col gap-1 justify-center bottom-0 -translate-y-10 animate-bounce">
                SCROLL
                <div className="h-10 w-[1px] bg-(--light-fg) dark:bg-(--dark-fg)"/>
            </div>
            {view && <Viewer setView={setView} /> }
        </div>
    )
}