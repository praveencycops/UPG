
import React, { useState } from 'react';
import type { FormDataShape } from '../types';
import { ADVANCED_COLOR_INTELLIGENCE } from '../constants';

interface ColorPaletteSelectorProps {
    formData: FormDataShape;
    updateFormData: (data: Partial<FormDataShape>) => void;
}

export const ColorPaletteSelector: React.FC<ColorPaletteSelectorProps> = ({ formData, updateFormData }) => {
    const [selectedStrategy, setSelectedStrategy] = useState((formData.colorStrategy as string) || '');
    
    const handleStrategyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStrategy = e.target.value;
        setSelectedStrategy(newStrategy);
        updateFormData({ colorStrategy: newStrategy, colorScheme: '' });
    };

    const handlePaletteSelect = (paletteId: string, paletteName: string) => {
        updateFormData({ colorScheme: `${paletteId}|${paletteName}` });
    };

    const intelligenceData = ADVANCED_COLOR_INTELLIGENCE[selectedStrategy as keyof typeof ADVANCED_COLOR_INTELLIGENCE];

    return (
        <div className="space-y-4">
            <select
                name="colorStrategy"
                value={selectedStrategy}
                onChange={handleStrategyChange}
                className="w-full p-3 border-2 border-gray-600 rounded-lg bg-brand-surface focus:border-brand-primary focus:ring-brand-primary transition"
            >
                <option value="">🤖 AI will optimize color strategy...</option>
                {Object.entries(ADVANCED_COLOR_INTELLIGENCE).map(([key, value]) => (
                     <option key={key} value={key}>{value.name}</option>
                ))}
            </select>

            {intelligenceData && (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {intelligenceData.palettes.map((palette, index) => {
                            const paletteId = `${selectedStrategy}-${index}`;
                            const isSelected = (formData.colorScheme as string)?.startsWith(paletteId);
                            return (
                                <div
                                    key={paletteId}
                                    onClick={() => handlePaletteSelect(paletteId, palette.name)}
                                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${isSelected ? 'border-brand-accent scale-105' : 'border-gray-600 hover:border-brand-primary'}`}
                                >
                                    <div
                                        className="h-16 w-full rounded-md mb-3"
                                        style={{ background: `linear-gradient(135deg, ${palette.colors.join(', ')})` }}
                                    ></div>
                                    <h5 className="font-bold text-white">{palette.name}</h5>
                                    <p className="text-sm text-brand-text-muted">{palette.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                     <div className="p-4 bg-blue-900/50 border-l-4 border-blue-400 rounded-r-lg">
                        <strong className="text-blue-300">🤖 AI Color Intelligence:</strong>
                        <p className="text-blue-200">{intelligenceData.advice}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
