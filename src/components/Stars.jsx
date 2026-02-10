import { useState, useEffect } from "react";

export default function Stars() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starsCount = 52

        const newStars = Array.from({ length: starsCount }).map((_, i) => ({
            id: i,
            x: Math.round(Math.random() * 100),
            y: Math.round(Math.random() * 100),
            size: Math.round(Math.random() * 2 + 3),
            opacity: Math.round(Math.random()),
            animationDelay: `${Math.random() * 5}s`
        }));

        setStars(newStars);
    }, [])

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    style={{
                        position: "absolute",
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        opacity: star.opacity,
                        animation: `twinkle 3s infinite ease-in-out`,
                        animationDelay: star.animationDelay
                    }}
                />
            ))}
        </div>
    )
}