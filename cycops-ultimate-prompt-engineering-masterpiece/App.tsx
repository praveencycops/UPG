
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SectionSelector } from './components/SectionSelector';
import { MultiStepForm } from './components/MultiStepForm';
import { Results } from './components/Results';
import { generatePrompts } from './services/geminiService';
import type { SectionKey, FormDataShape, GeneratedPrompts } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';

const App: React.FC = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [selectedSections, setSelectedSections] = useState<SectionKey[]>(['foundation', 'technical']);
    const [isLoading, setIsLoading] = useState(false);
    const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompts | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleStartProject = useCallback((sections: SectionKey[]) => {
        setSelectedSections(sections);
        setIsStarted(true);
    }, []);

    const handleGenerate = async (formData: FormDataShape) => {
        setIsLoading(true);
        setGeneratedPrompts(null);
        setError(null);
        try {
            const prompts = await generatePrompts(formData);
            setGeneratedPrompts(prompts);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setIsStarted(false);
        setGeneratedPrompts(null);
        setSelectedSections(['foundation', 'technical']);
        setError(null);
    };

    return (
        <div className="min-h-screen p-2 sm:p-5">
            <div className="container max-w-7xl mx-auto bg-gradient-to-br from-[#1e1e40] to-[#2a2a5a] rounded-2xl shadow-2xl overflow-hidden border border-brand-primary/50">
                <Header />
                <main className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-brand-surface to-brand-surface-secondary">
                    {!isStarted ? (
                        <SectionSelector onStart={handleStartProject} initialSections={selectedSections} />
                    ) : (
                        <>
                            {!generatedPrompts && !isLoading && !error && (
                                <MultiStepForm
                                    selectedSections={selectedSections}
                                    onGenerate={handleGenerate}
                                    onReset={handleReset}
                                />
                            )}
                            {isLoading && <LoadingSpinner />}
                            {error && (
                                <div className="text-center p-8 bg-red-900/50 border border-red-500 rounded-lg">
                                    <h3 className="text-2xl font-bold text-red-300 mb-4">Generation Failed</h3>
                                    <p className="text-red-200 mb-6">{error}</p>
                                    <button
                                        onClick={handleReset}
                                        className="btn btn-primary bg-red-600 hover:bg-red-700 border-red-400">
                                        Try Again
                                    </button>
                                </div>
                            )}
                            {generatedPrompts && (
                                <Results
                                    prompts={generatedPrompts}
                                    selectedSections={selectedSections}
                                    onReset={handleReset}
                                />
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
