
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './Icons';

interface SelectProps {
    name: string;
    options: { value: string; label: string; }[];
    selected: string | undefined;
    onChange: (name: string, selected: string) => void;
    placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({ name, options, selected, onChange, placeholder = "Select an option..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleSelect = (optionValue: string) => {
        onChange(name, optionValue);
        setIsOpen(false);
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
    
    const selectedLabel = options.find(opt => opt.value === selected)?.label || placeholder;

    return (
        <div className="relative w-full" ref={ref}>
            <div
                className="w-full p-3 flex items-center justify-between border-2 border-gray-600 rounded-lg bg-brand-surface cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selected ? 'text-brand-text' : 'text-brand-text-muted'}>{selectedLabel}</span>
                <ChevronDownIcon className={`w-5 h-5 text-brand-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 p-2 bg-brand-surface-secondary border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={`p-2 rounded-md hover:bg-brand-primary/30 cursor-pointer ${selected === option.value ? 'bg-brand-primary/20' : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <span className="text-brand-text">{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
