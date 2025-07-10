
import React from 'react';
import { CycopsIcon } from './Icons';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-black/20 rounded-lg">
            <CycopsIcon className="w-24 h-24 text-brand-primary animate-pulse"/>
            <h3 className="text-2xl font-bold text-white mt-6">Generating Your Prompt Ecosystem...</h3>
            <p className="text-brand-text-muted mt-2">The AI is architecting your vision. This may take a moment.</p>
        </div>
    );
};
