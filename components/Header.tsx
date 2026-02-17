import React from 'react';
import { Menu } from 'lucide-react';
import { Magnetic } from './Magnetic';

interface HeaderProps {
    onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-xl font-bold tracking-tighter">
                Akshay S G
            </div>
            <Magnetic>
                <button
                    onClick={onOpenMenu}
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                >
                    <span className="hidden md:inline">MENU</span>
                    <Menu size={24} />
                </button>
            </Magnetic>
        </header>
    );
};
