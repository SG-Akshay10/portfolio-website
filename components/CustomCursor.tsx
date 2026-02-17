import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const cursorSize = 20;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    // Smooth spring animation
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        };

        const manageMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', manageMouseMove);
        window.addEventListener('mouseover', manageMouseOver);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            window.removeEventListener('mouseover', manageMouseOver);
        };
    }, []);

    // Only show custom cursor on non-touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
            animate={{
                width: isHovered ? 60 : 20,
                height: isHovered ? 60 : 20,
                x: isHovered ? -20 : 0,
                y: isHovered ? -20 : 0
            }}
            className="fixed w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        />
    );
};
