
import { useState, useCallback } from 'react';
import type { SectionKey, FormDataShape } from '../types';

export const useMultiStepForm = (selectedSections: SectionKey[]) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormDataShape>({});
    const totalSteps = selectedSections.length;

    const nextStep = useCallback(() => {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }, [totalSteps]);

    const prevStep = useCallback(() => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    }, []);

    const updateFormData = useCallback((newData: Partial<FormDataShape>) => {
        setFormData(prev => ({ ...prev, ...newData }));
    }, []);

    const isLastStep = currentStep === totalSteps;
    const isFirstStep = currentStep === 1;
    const currentSectionKey = selectedSections[currentStep - 1];

    return {
        currentStep,
        totalSteps,
        formData,
        isLastStep,
        isFirstStep,
        currentSectionKey,
        nextStep,
        prevStep,
        updateFormData,
        setFormData
    };
};
