import React, { useState, useMemo } from 'react';
import type { GeneratedPrompts, SectionKey } from '../types';
import { ClipboardCheckIcon, ClipboardIcon } from './Icons';

interface ResultsProps {
    prompts: GeneratedPrompts;
    selectedSections: SectionKey[];
    onReset: () => void;
}

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-4 rounded-lg text-center border border-blue-700">
        <span className="block text-3xl font-bold text-brand-accent">{value}</span>
        <span className="text-sm text-blue-200">{label}</span>
    </div>
);

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="w-full mt-4 px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 bg-brand-primary hover:bg-blue-500 text-white"
        >
            {copied ? <><ClipboardCheckIcon className="w-5 h-5"/> Copied!</> : <><ClipboardIcon className="w-5 h-5"/> Copy Prompt</>}
        </button>
    );
};

export const Results: React.FC<ResultsProps> = ({ prompts, selectedSections, onReset }) => {
    const availableTabs = [
        { key: 'master', title: '🚀 Master' },
        { key: 'workflow', title: '🌊 Workflow' },
        { key: 'technical', title: '⚡ Technical' },
        { key: 'database', title: '🗄️ Database' },
        { key: 'design', title: '🎨 Design' },
        { key: 'business', title: '📊 Business' },
        { key: 'marketing', title: '🚀 Marketing' },
        { key: 'quality', title: '🔬 QA' },
        { key: 'deployment', title: '🌐 Deployment' },
        { key: 'handover', title: '🤝 Handover' },
    ];
    
    const [activeTab, setActiveTab] = useState('master');
    
    const stats = useMemo(() => {
        const allPrompts = Object.values(prompts).join(' ');
        const totalWords = allPrompts.split(/\s+/).length;
        return {
            totalPrompts: Object.keys(prompts).length,
            totalSections: selectedSections.length,
            estimatedTokens: Math.round(totalWords * 1.3).toLocaleString(),
            completenessScore: `${Math.round((selectedSections.length / 9) * 100)}%`,
        };
    }, [prompts, selectedSections]);

    return (
        <div className="result-container space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-brand-accent">🎉 Your Ultimate AI Prompt Ecosystem is Ready!</h2>
                <p className="text-brand-text-muted mt-2">The most comprehensive, detailed AI development prompt system ever created.</p>
            </div>

            <div className="prompt-stats grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Total Prompts" value={stats.totalPrompts} />
                <StatCard label="Sections Generated" value={stats.totalSections} />
                <StatCard label="Estimated Tokens" value={stats.estimatedTokens} />
                <StatCard label="Completeness Score" value={stats.completenessScore} />
            </div>

            <div className="result-tabs flex flex-wrap gap-2 border-b-2 border-gray-700 pb-2">
                {availableTabs.map(tab => (
                     prompts[tab.key] && prompts[tab.key].length > 50 && // Only show tab if prompt exists
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${activeTab === tab.key ? 'bg-brand-primary text-white' : 'bg-gray-700 hover:bg-gray-600 text-brand-text-muted'}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className="result-content bg-brand-surface/50 p-6 rounded-lg border border-gray-700">
                <pre className="result-text w-full whitespace-pre-wrap font-mono text-sm text-brand-text bg-transparent max-h-[60vh] overflow-y-auto p-4 border border-gray-600 rounded-md">
                    {prompts[activeTab]}
                </pre>
                <CopyButton text={prompts[activeTab]} />
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={onReset}
                    className="px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 bg-red-800 hover:bg-red-700 text-white focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Start a New Project
                </button>
            </div>
        </div>
    );
};