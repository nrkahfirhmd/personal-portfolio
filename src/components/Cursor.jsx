import { useEffect, useState, useRef } from "react"

export default function Cursor()
{
    const cursorDotOutline = useRef();
    const cursorDot = useRef();
    const requestRef = useRef();
    const previousTimeRef = useRef();
    let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    let cursorVisible = useState(false);
    let cursorEnlarged = useState(false);

    const onMouseMove = event => {
        const { clientX: x, clientY: y } = event;
        setMousePosition({ x, y });
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
    const onMouseDown = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };
    const onMouseUp = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };
    const onResize = event => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        window.addEventListener("resize", onResize);
        requestRef.current = requestAnimationFrame(animateDotOutline);

        handleLinks();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    let { x, y } = mousePosition;
    const winDimensions = { width, height };
    let endX = winDimensions.width / 2;
    let endY = winDimensions.height / 2;

    function positionDot(e) {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX = e.clientX;
        endY = e.clientY;
        cursorDot.current.style.top = endY + "px";
        cursorDot.current.style.left = endX + "px";
    }

    function toggleCursorVisibility() {
        if (cursorVisible.current) {
        cursorDot.current.style.opacity = 1;
        cursorDotOutline.current.style.opacity = 1;
        } else {
        cursorDot.current.style.opacity = 0;
        cursorDotOutline.current.style.opacity = 0;
        }
    }

    function toggleCursorSize() {
        if (cursorEnlarged.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
        } else {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
    }

    function handleLinks() {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => {
                cursorEnlarged.current = true;
                toggleCursorSize();
            });
            el.addEventListener("mouseout", () => {
                cursorEnlarged.current = false;
                toggleCursorSize();
            });
        });
    }

    const animateDotOutline = time => {
        if (previousTimeRef.current !== undefined) {
            x += (endX - x) / 8;
            y += (endY - y) / 8;
            cursorDotOutline.current.style.top = y + "px";
            cursorDotOutline.current.style.left = x + "px";
            cursorDotOutline.current.style.transform = "translate(-50%, -50%)";
            cursorDot.current.style.transform = "translate(-50%, -50%)";
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    return (
        <>
            <div
                className={`hidden md:block fixed w-8 h-8 border border-2 border-black/25 dark:border-white/25 rounded-full pointer-events-none opacity-0 transition-transform z-9999`}
                ref={cursorDotOutline}
            />
            <div
                className={`hidden md:block fixed w-2 h-2 bg-black dark:bg-white rounded-full pointer-events-none opacity-0 transition-transform z-9999`}
                ref={cursorDot}
            />
        </>
    )
}