import { useEffect, useRef, useState } from 'react';

const AsciiDonut = ({ color = "text-[var(--color-primary)]" }) => {
    const [frame, setFrame] = useState('');
    const requestRef = useRef();
    const A = useRef(0);
    const B = useRef(0);

    const renderDonut = () => {
        let b = [];
        let z = [];
        A.current += 0.02;
        B.current += 0.01;
        let cA = Math.cos(A.current), sA = Math.sin(A.current),
            cB = Math.cos(B.current), sB = Math.sin(B.current);
        
        // Inisialisasi buffer
        for(let k = 0; k < 1760; k++) {
            b[k] = k % 80 === 79 ? "\n" : " ";
            z[k] = 0;
        }

        // Logika Matematika Donut (Torus)
        for (let j = 0; j < 6.28; j += 0.07) {
        let ct = Math.cos(j), st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
            let sp = Math.sin(i), cp = Math.cos(i),
                h = ct + 2,
                D = 1 / (sp * h * sA + st * cA + 5),
                t = sp * h * cA - st * sA;
            
            let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
                y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
                o = x + 80 * y,
                N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
            
            if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D;
            // Karakter ASCII untuk tekstur berdasarkan pencahayaan (N)
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
        }
        
        setFrame(b.join(""));
        requestRef.current = requestAnimationFrame(renderDonut);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(renderDonut);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div className="flex justify-center items-center overflow-hidden rounded-lg">
            <pre className={`whitespace-pre font-mono text-[6px] md:text-[8px] leading-none ${color}`}>
                {frame}
            </pre>
        </div>
    );
};

export default AsciiDonut;