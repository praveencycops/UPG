
import React from 'react';

interface NavigationProps {
    isFirstStep: boolean;
    isLastStep: boolean;
    onNext: () => void;
    onPrev: () => void;
    onGenerate: () => void;
    onReset: () => void;
}

const Button: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string; disabled?: boolean }> = ({ onClick, children, className = '', disabled = false }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${className}`}
    >
        {children}
    </button>
);

export const Navigation: React.FC<NavigationProps> = ({ isFirstStep, isLastStep, onNext, onPrev, onGenerate, onReset }) => {
    return (
        <div className="navigation flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-700">
            <div>
                {!isFirstStep && (
                    <Button onClick={onPrev} className="bg-gray-600 hover:bg-gray-500 text-white focus:ring-gray-400">
                        ← Previous
                    </Button>
                )}
                 <Button onClick={onReset} className="bg-red-800 hover:bg-red-700 text-white focus:ring-red-500 ml-4">
                    Reset
                </Button>
            </div>
            <div>
                {!isLastStep && (
                    <Button onClick={onNext} className="bg-brand-primary hover:bg-blue-500 text-white focus:ring-blue-400">
                        Next →
                    </Button>
                )}
                {isLastStep && (
                    <Button onClick={onGenerate} className="bg-gradient-to-r from-brand-accent to-emerald-500 hover:from-brand-accent hover:to-emerald-400 text-slate-900 text-lg shadow-lg focus:ring-emerald-400">
                        Generate Ultimate Prompt Ecosystem 🚀
                    </Button>
                )}
            </div>
        </div>
    );
};
