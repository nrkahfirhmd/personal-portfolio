import { useEffect, useRef } from "react";

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // Konfigurasi
        let width, height;
        let particles = [];
        const fontSize = 10; // Ukuran huruf
        const spacing = 15; // Jarak antar huruf
        const mouse = { x: -1000, y: -1000 }; // Posisi awal mouse (di luar layar)
        const charArray = "01XY+-_*"; // Karakter yang akan muncul

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        // Membuat grid partikel (titik karakter)
        const initParticles = () => {
            particles = [];
            const columns = Math.floor(width / spacing);
            const rows = Math.floor(height / spacing);

            for (let x = 0; x < columns; x++) {
                for (let y = 0; y < rows; y++) {
                    particles.push({
                        x: x * spacing,
                        y: y * spacing,
                        char: charArray[Math.floor(Math.random() * charArray.length)],
                        originalChar: charArray[Math.floor(Math.random() * charArray.length)]
                    });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.font = `${fontSize}px monospace`;
            
            particles.forEach((p) => {
                // Hitung jarak mouse ke partikel ini
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Logika Glow
                const glowRadius = 150;
                
                if (distance < glowRadius) {
                    // Hitung opacity berdasarkan jarak (makin dekat makin terang 1.0)
                    const opacity = 1 - (distance / glowRadius);
                    ctx.fillStyle = `rgba(128, 128, 128, ${opacity})`;
                    ctx.fillText(p.char, p.x, p.y);
                } else {
                    // Warna Default (Gelap/Samar)
                    ctx.fillStyle = "rgba(128, 128, 128, 0.05)"; 
                    ctx.fillText(p.originalChar, p.x, p.y);
                }
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-screen -z-10"
        />
    );
};

export default MatrixBackground;