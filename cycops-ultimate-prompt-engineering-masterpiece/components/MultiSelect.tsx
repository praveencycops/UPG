
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, XCircleIcon } from './Icons';

interface MultiSelectProps {
    name: string;
    options: string[];
    selected: string[];
    onChange: (name: string, selected: string[]) => void;
    placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ name, options, selected, onChange, placeholder = "Select options..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleToggle = (option: string) => {
        const newSelected = selected.includes(option)
            ? selected.filter(item => item !== option)
            : [...selected, option];
        onChange(name, newSelected);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const removeOption = (option: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const newSelected = selected.filter(item => item !== option);
        onChange(name, newSelected);
    }

    return (
        <div className="relative w-full" ref={ref}>
            <div
                className="w-full p-3 flex items-center justify-between border-2 border-gray-600 rounded-lg bg-brand-surface cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-wrap gap-2">
                    {selected.length > 0 ? (
                        selected.map(option => (
                            <span key={option} className="flex items-center gap-1 bg-brand-primary/50 text-white text-sm px-2 py-1 rounded">
                                {option}
                                <button onClick={(e) => removeOption(option, e)} className="hover:text-red-300">
                                    <XCircleIcon className="w-4 h-4" />
                                </button>
                            </span>
                        ))
                    ) : (
                        <span className="text-brand-text-muted">{placeholder}</span>
                    )}
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-brand-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 p-2 bg-brand-surface-secondary border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map(option => (
                        <div
                            key={option}
                            className="flex items-center p-2 rounded-md hover:bg-brand-primary/30 cursor-pointer"
                            onClick={() => handleToggle(option)}
                        >
                            <input
                                type="checkbox"
                                checked={selected.includes(option)}
                                readOnly
                                className="w-4 h-4 mr-3 rounded text-brand-primary focus:ring-brand-primary bg-gray-700 border-gray-500"
                            />
                            <span className="text-brand-text">{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
