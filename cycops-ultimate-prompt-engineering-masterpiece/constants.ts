
import type { SectionConfig } from './types';
import { FoundationIcon, TechnicalIcon, DatabaseIcon, DesignIcon, BusinessIcon, AdvancedIcon, MarketingIcon, QualityIcon, DeploymentIcon } from './components/Icons';
import React from 'react';

export const SECTIONS: SectionConfig[] = [
    { key: 'foundation', title: '🏗️ Foundation Engineering', description: 'Core project architecture, objectives, and fundamental specifications.', status: 'Core Required', icon: React.createElement(FoundationIcon) },
    { key: 'technical', title: '⚡ Technical Architecture', description: 'Advanced technical specifications, integrations, and performance optimization.', status: 'Core Required', icon: React.createElement(TechnicalIcon) },
    { key: 'database', title: '🗄️ Database Architecture', description: 'Schema design, data modeling, and query optimization strategies.', status: 'Recommended', icon: React.createElement(DatabaseIcon) },
    { key: 'design', title: '🎨 Design Psychology', description: 'Advanced color psychology, UX patterns, and conversion optimization.', status: 'Recommended', icon: React.createElement(DesignIcon) },
    { key: 'business', title: '📊 Business Intelligence', description: 'Market analysis, revenue optimization, and strategic business logic.', status: 'Optional', icon: React.createElement(BusinessIcon) },
    { key: 'advanced', title: '🧠 AI & Innovation', description: 'AI integration, machine learning, and emerging technology.', status: 'Advanced', icon: React.createElement(AdvancedIcon) },
    { key: 'marketing', title: '🚀 Growth Engineering', description: 'Marketing automation, SEO optimization, and viral growth strategies.', status: 'Optional', icon: React.createElement(MarketingIcon) },
    { key: 'quality', title: '🔬 Quality Assurance', description: 'Testing protocols, security audits, and performance validation.', status: 'Advanced', icon: React.createElement(QualityIcon) },
    { key: 'deployment', title: '🌐 Deployment Mastery', description: 'Production deployment, scaling strategies, and maintenance protocols.', status: 'Recommended', icon: React.createElement(DeploymentIcon) }
];

export const STATUS_STYLES = {
    'Core Required': 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-white',
    'Recommended': 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-400 text-white',
    'Optional': 'bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-400 text-white',
    'Advanced': 'bg-gradient-to-r from-purple-500 to-purple-600 border-purple-400 text-white',
};

export const ADVANCED_COLOR_INTELLIGENCE = {
    "psychology-trust": {
        name: "Trust Psychology",
        palettes: [
            { name: "Financial Trust", colors: ["#1e3a8a", "#3b82f6", "#60a5fa", "#dbeafe"], desc: "Deep blue for financial credibility" },
            { name: "Healthcare Trust", colors: ["#065f46", "#10b981", "#34d399", "#a7f3d0"], desc: "Medical green for health & wellness" },
            { name: "Legal Authority", colors: ["#374151", "#6b7280", "#9ca3af", "#f3f4f6"], desc: "Professional gray for legal authority" }
        ],
        advice: "Trust colors build psychological credibility and reliability. Blue dominates financial services, while green conveys health and growth."
    },
     "psychology-conversion": {
        name: "Conversion Psychology",
        palettes: [
            { name: "High-Convert Orange", colors: ["#ea580c", "#f97316", "#fb923c", "#fed7aa"], desc: "Proven high-converting orange" },
            { name: "Urgency Red", colors: ["#dc2626", "#ef4444", "#f87171", "#fecaca"], desc: "Creates psychological urgency" },
            { name: "Success Green", colors: ["#059669", "#10b981", "#34d399", "#a7f3d0"], desc: "Positive reinforcement psychology" }
        ],
        advice: "Conversion colors trigger psychological responses that drive action. Orange and red create urgency, while strategic green reinforces positive outcomes."
    },
    "psychology-premium": {
        name: "Premium Psychology",
        palettes: [
            { name: "Luxury Gold", colors: ["#92400e", "#d97706", "#f59e0b", "#fde68a"], desc: "Premium gold for luxury positioning" },
            { name: "Royal Purple", colors: ["#581c87", "#7c3aed", "#a855f7", "#e9d5ff"], desc: "Sophisticated purple for high-end services" },
            { name: "Platinum Elite", colors: ["#1f2937", "#374151", "#6b7280", "#e5e7eb"], desc: "Modern platinum for premium experiences" }
        ],
        advice: "Premium colors convey exclusivity and luxury. Gold and purple psychologically justify higher prices and premium positioning."
    },
};
