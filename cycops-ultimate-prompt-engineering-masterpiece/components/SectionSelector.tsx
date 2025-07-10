
import React, { useState, useCallback } from 'react';
import type { SectionKey } from '../types';
import { SECTIONS, STATUS_STYLES } from '../constants';

interface SectionSelectorProps {
    onStart: (selectedSections: SectionKey[]) => void;
    initialSections: SectionKey[];
}

const SectionCard: React.FC<{ section: typeof SECTIONS[0]; isSelected: boolean; onSelect: () => void }> = ({ section, isSelected, onSelect }) => {
    const isRequired = section.status === 'Core Required';
    const selectedClass = isSelected ? 'border-brand-accent bg-emerald-900/50 scale-105 shadow-lg' : 'border-gray-600 hover:border-brand-primary';
    const requiredClass = isRequired ? 'cursor-not-allowed opacity-80' : 'cursor-pointer';

    return (
        <div
            onClick={!isRequired ? onSelect : undefined}
            className={`section-card bg-brand-surface/50 p-5 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${selectedClass} ${requiredClass}`}
        >
            <h4 className="font-bold text-lg mb-2 flex items-center gap-3">{section.icon} {section.title}</h4>
            <p className="text-sm text-brand-text-muted mb-4">{section.description}</p>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_STYLES[section.status]}`}>
                {section.status}
            </span>
        </div>
    );
};

export const SectionSelector: React.FC<SectionSelectorProps> = ({ onStart, initialSections }) => {
    const [selected, setSelected] = useState<SectionKey[]>(initialSections);

    const toggleSection = useCallback((key: SectionKey) => {
        setSelected(prev =>
            prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]
        );
    }, []);
    
    const handleStart = () => {
        const orderedSelection = SECTIONS.filter(s => selected.includes(s.key)).map(s => s.key);
        onStart(orderedSelection);
    };

    return (
        <div className="section-selector bg-black/20 border-2 border-brand-primary/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-2">🧠 Advanced Prompt Engineering Configuration</h3>
            <p className="text-brand-text-muted mb-8">
                Select prompt engineering modules to create the most comprehensive AI development ecosystem possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SECTIONS.map(section => (
                    <SectionCard
                        key={section.key}
                        section={section}
                        isSelected={selected.includes(section.key)}
                        onSelect={() => toggleSection(section.key)}
                    />
                ))}
            </div>
            <div className="mt-10 text-center">
                <button
                    onClick={handleStart}
                    className="btn btn-generate text-lg sm:text-xl px-8 py-4 bg-gradient-to-r from-brand-accent to-emerald-500 text-slate-900 font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    Configure Project →
                </button>
            </div>
        </div>
    );
};
