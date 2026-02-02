import { useEffect } from "react";
import { useState } from "react";

export function useMouseLocation() {
    const [mouseLocation, setMouseLocation] = useState({ x: null, y: null });

    const handleMouseMove = (event) => {
        setMouseLocation({ x: event.x, y: event.y })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return { mouseLocation };
};

