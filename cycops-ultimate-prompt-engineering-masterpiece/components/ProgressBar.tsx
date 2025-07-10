
import React from 'react';
import { SECTIONS } from '../constants';
import type { SectionKey } from '../types';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    sections: SectionKey[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, sections }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;
    const currentSectionKey = sections[currentStep - 1];
    const sectionInfo = SECTIONS.find(s => s.key === currentSectionKey);
    const sectionTitle = sectionInfo ? sectionInfo.title.substring(3) : 'Configuration';

    return (
        <div className="progress-container bg-black/20 p-4 rounded-xl border border-gray-700">
            <div className="progress-bar w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                <div
                    className="progress-fill h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <div className="progress-text text-center text-sm sm:text-base font-semibold text-brand-text-muted">
                Step {currentStep} of {totalSteps}: <span className="text-brand-text font-bold">{sectionTitle}</span>
            </div>
        </div>
    );
};
