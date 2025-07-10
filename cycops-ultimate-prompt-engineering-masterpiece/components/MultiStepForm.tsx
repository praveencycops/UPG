
import React from 'react';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import type { SectionKey, FormDataShape } from '../types';
import { ProgressBar } from './ProgressBar';
import { FormSection } from './FormSection';
import { Navigation } from './Navigation';

interface MultiStepFormProps {
    selectedSections: SectionKey[];
    onGenerate: (data: FormDataShape) => void;
    onReset: () => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ selectedSections, onGenerate, onReset }) => {
    const {
        currentStep,
        totalSteps,
        formData,
        isLastStep,
        isFirstStep,
        currentSectionKey,
        nextStep,
        prevStep,
        updateFormData,
    } = useMultiStepForm(selectedSections);

    const handleGenerate = () => {
        onGenerate(formData);
    };

    return (
        <div className="space-y-8">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} sections={selectedSections} />
            <form onSubmit={(e) => e.preventDefault()}>
                <FormSection
                    sectionKey={currentSectionKey}
                    formData={formData}
                    updateFormData={updateFormData}
                />
            </form>
            <Navigation
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                onNext={nextStep}
                onPrev={prevStep}
                onGenerate={handleGenerate}
                onReset={onReset}
            />
        </div>
    );
};
