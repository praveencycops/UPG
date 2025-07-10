import React from 'react';
import { CycopsIcon } from './Icons';

// Moved the complex SVG data URL to a constant for cleanliness and to avoid JSX parsing issues.
const GRID_SVG_URL = `url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3e%3cdefs%3e%3cpattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"%3e%3cpath d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100" height="100" fill="url(%23grid)"/%3e%3c/svg%3e')`;

export const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#8b5cf6] text-white p-6 sm:p-8 text-center relative overflow-hidden">
             <div 
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: GRID_SVG_URL }}
             ></div>
            <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-shadow-lg flex items-center justify-center gap-3">
                    <CycopsIcon className="w-10 h-10 sm:w-12 sm:h-12"/>
                    Ultimate Prompt Engineering Masterpiece
                </h1>
                <p className="text-sm sm:text-base opacity-90">by Praveen Kumar Suraparaju</p>
                <p className="text-xs sm:text-sm opacity-80 mt-1">Revolutionary AI Prompt Generation System • Next-Gen Edition</p>
            </div>
        </header>
    );
};
