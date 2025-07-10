
import React from 'react';
import type { SectionKey, FormDataShape } from '../types';
import { MultiSelect } from './MultiSelect';
import { ColorPaletteSelector } from './ColorPaletteSelector';
import { Select } from './Select';
import * as o from '../formOptions'; // o for options

interface FormSectionProps {
    sectionKey: SectionKey;
    formData: FormDataShape;
    updateFormData: (data: Partial<FormDataShape>) => void;
}

const FormField: React.FC<{ label: string; helpText?: string; children: React.ReactNode }> = ({ label, helpText, children }) => (
    <div className="form-group mb-6">
        <label className="block text-lg font-semibold text-brand-text mb-2">{label}</label>
        {children}
        {helpText && <p className="text-sm text-brand-text-muted/70 mt-2 italic">{helpText}</p>}
    </div>
);

export const FormSection: React.FC<FormSectionProps> = ({ sectionKey, formData, updateFormData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updateFormData({ [e.target.name]: e.target.value, [sectionKey]: "true" });
    };

    const handleSelectChange = (name: string, value: string) => {
        updateFormData({ [name]: value, [sectionKey]: "true" });
    };
    
    const handleMultiSelectChange = (name: string, value: string[]) => {
        updateFormData({ [name]: value, [sectionKey]: "true" });
    };

    const renderSection = () => {
        switch (sectionKey) {
            case 'foundation':
                return (
                    <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🏗️ Foundation Engineering</h2>
                        <FormField label="🎯 Project Vision & Strategic Objective">
                            <textarea id="projectVision" name="projectVision" value={(formData.projectVision as string) || ''} onChange={handleChange} className="w-full p-3 border-2 border-gray-600 rounded-lg bg-brand-surface focus:border-brand-primary focus:ring-brand-primary transition" rows={5} placeholder="Describe the core problem, target audience, unique value, and long-term goals." />
                        </FormField>
                         <FormField label="📝 Project Description (Optional)">
                            <textarea id="projectDescription" name="projectDescription" value={(formData.projectDescription as string) || ''} onChange={handleChange} className="w-full p-3 border-2 border-gray-600 rounded-lg bg-brand-surface focus:border-brand-primary focus:ring-brand-primary transition" rows={3} placeholder="Optionally provide a specific project description, or let the AI generate one from your vision." />
                        </FormField>
                        <FormField label="🏷️ Project Name">
                            <input type="text" id="projectName" name="projectName" value={(formData.projectName as string) || ''} onChange={handleChange} className="w-full p-3 border-2 border-gray-600 rounded-lg bg-brand-surface focus:border-brand-primary focus:ring-brand-primary transition" placeholder="Leave blank for AI-generated names" />
                        </FormField>
                        <FormField label="🎪 Project Type">
                           <Select name="projectType" selected={formData.projectType as string} onChange={handleSelectChange} options={o.PROJECT_TYPE_OPTIONS} placeholder="Select primary project type..." />
                        </FormField>
                         <FormField label="🎛️ Project Complexity & Scale">
                           <Select name="complexityLevel" selected={formData.complexityLevel as string} onChange={handleSelectChange} options={o.COMPLEXITY_OPTIONS} placeholder="Select complexity level..." />
                        </FormField>
                        <FormField label="👥 Target Audience & User Personas" helpText="Select all applicable audience types.">
                            <MultiSelect name="targetAudience" options={o.TARGET_AUDIENCE_OPTIONS} selected={formData.targetAudience as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'technical':
                 return (
                    <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">⚡ Technical Architecture</h2>
                        <FormField label="🔧 Core System Capabilities" helpText="Select the primary features your system will have.">
                             <MultiSelect name="systemCapabilities" options={o.SYSTEM_CAPABILITIES_OPTIONS} selected={formData.systemCapabilities as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                        <FormField label="🚀 Performance & Scale Requirements">
                           <Select name="performanceRequirements" selected={formData.performanceRequirements as string} onChange={handleSelectChange} options={o.PERFORMANCE_REQUIREMENTS_OPTIONS} placeholder="Select performance tier..." />
                        </FormField>
                        <FormField label="🔗 Integration Requirements" helpText="What other platforms does this need to connect to?">
                             <MultiSelect name="integrationRequirements" options={o.INTEGRATION_REQUIREMENTS_OPTIONS} selected={formData.integrationRequirements as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="🛡️ Security & Compliance Requirements">
                             <MultiSelect name="securityRequirements" options={o.SECURITY_REQUIREMENTS_OPTIONS} selected={formData.securityRequirements as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'database':
                 return (
                    <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🗄️ Database Architecture</h2>
                        <FormField label="🗃️ Database Type" helpText="Choose the type of database that best fits your project needs.">
                           <Select name="databaseType" selected={formData.databaseType as string} onChange={handleSelectChange} options={o.DATABASE_TYPE_OPTIONS} placeholder="Select database type..." />
                        </FormField>
                        <FormField label="🔑 Core Data Entities" helpText="List the main objects or concepts in your system (e.g., User, Product, Order, Post). Separate with commas.">
                            <input type="text" name="dataEntities" value={(formData.dataEntities as string) || ''} onChange={handleChange} className="w-full p-3 border-2 border-gray-600 rounded-lg bg-brand-surface focus:border-brand-primary focus:ring-brand-primary transition" placeholder="e.g., User, Project, Task, Comment" />
                        </FormField>
                        <FormField label="✍️ User-Generated Content" helpText="What kind of content will users create?">
                            <MultiSelect name="userGeneratedContent" options={o.USER_CONTENT_OPTIONS} selected={formData.userGeneratedContent as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                        <FormField label="📈 Data Scalability Needs">
                           <Select name="dataScalability" selected={formData.dataScalability as string} onChange={handleSelectChange} options={o.DATA_SCALABILITY_OPTIONS} placeholder="Select expected data scale..." />
                        </FormField>
                    </>
                );
            case 'design':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🎨 Design Psychology Intelligence</h2>
                         <FormField label="🧠 Design Psychology Strategy">
                           <Select name="designPhilosophy" selected={formData.designPhilosophy as string} onChange={handleSelectChange} options={o.DESIGN_PHILOSOPHY_OPTIONS} placeholder="Select design psychology..." />
                        </FormField>
                        <FormField label="🌈 Advanced Color Psychology Strategy">
                            <ColorPaletteSelector formData={formData} updateFormData={updateFormData} />
                        </FormField>
                         <FormField label="🎛️ Advanced UX/UI Patterns & Interactions">
                            <MultiSelect name="uiPatterns" options={o.UI_PATTERNS_OPTIONS} selected={formData.uiPatterns as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                        <FormField label="✨ Animation & Interaction Sophistication">
                           <Select name="animationLevel" selected={formData.animationLevel as string} onChange={handleSelectChange} options={o.ANIMATION_LEVEL_OPTIONS} placeholder="Select animation approach..." />
                        </FormField>
                    </>
                );
            case 'business':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">📊 Business Intelligence</h2>
                        <FormField label="💰 Revenue Generation Strategy" helpText="Select all applicable revenue streams.">
                             <MultiSelect name="revenueStrategy" options={o.REVENUE_STRATEGY_OPTIONS} selected={formData.revenueStrategy as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                        <FormField label="🎯 Market Positioning & Strategy">
                           <Select name="marketStrategy" selected={formData.marketStrategy as string} onChange={handleSelectChange} options={o.MARKET_STRATEGY_OPTIONS} placeholder="Select market positioning..." />
                        </FormField>
                         <FormField label="📈 Growth & Scaling Strategy">
                            <MultiSelect name="growthStrategy" options={o.GROWTH_STRATEGY_OPTIONS} selected={formData.growthStrategy as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="📊 Key Performance Indicators (KPIs)">
                             <MultiSelect name="businessMetrics" options={o.BUSINESS_METRICS_OPTIONS} selected={formData.businessMetrics as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'advanced':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🧠 AI & Innovation</h2>
                        <FormField label="🤖 AI Integration & Intelligence Level">
                           <Select name="aiIntegrationLevel" selected={formData.aiIntegrationLevel as string} onChange={handleSelectChange} options={o.AI_INTEGRATION_LEVEL_OPTIONS} placeholder="Select AI integration level..." />
                        </FormField>
                        <FormField label="🧠 AI Capabilities & Features">
                             <MultiSelect name="aiCapabilities" options={o.AI_CAPABILITIES_OPTIONS} selected={formData.aiCapabilities as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="🌟 Emerging Technologies & Innovation">
                            <MultiSelect name="emergingTech" options={o.EMERGING_TECH_OPTIONS} selected={formData.emergingTech as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'marketing':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🚀 Growth Engineering</h2>
                        <FormField label="🔍 SEO & Content Strategy">
                           <Select name="seoStrategy" selected={formData.seoStrategy as string} onChange={handleSelectChange} options={o.MARKETING_SEO_OPTIONS} placeholder="Select SEO approach..." />
                        </FormField>
                        <FormField label="📈 Primary Growth Channels">
                             <MultiSelect name="growthChannels" options={o.MARKETING_GROWTH_CHANNELS_OPTIONS} selected={formData.growthChannels as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="⚡ Conversion Optimization Strategy">
                            <MultiSelect name="conversionOptimization" options={o.MARKETING_CONVERSION_OPTIONS} selected={formData.conversionOptimization as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'quality':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🔬 Quality Assurance</h2>
                        <FormField label="🧪 Testing & Quality Protocols">
                             <MultiSelect name="testingProtocols" options={o.QA_TESTING_PROTOCOLS_OPTIONS} selected={formData.testingProtocols as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                        <FormField label="⭐ Quality Standards & Benchmarks">
                             <MultiSelect name="qualityStandards" options={o.QA_QUALITY_STANDARDS_OPTIONS} selected={formData.qualityStandards as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="📊 Monitoring & Analytics Requirements">
                            <MultiSelect name="monitoringRequirements" options={o.QA_MONITORING_OPTIONS} selected={formData.monitoringRequirements as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                    </>
                );
            case 'deployment':
                return (
                     <>
                        <h2 className="section-title text-2xl font-bold text-brand-primary mb-6 pb-2 border-b-2 border-brand-primary/30">🌐 Deployment Mastery</h2>
                        <FormField label="🚀 Deployment Strategy & Environment">
                           <Select name="deploymentStrategy" selected={formData.deploymentStrategy as string} onChange={handleSelectChange} options={o.DEPLOYMENT_STRATEGY_OPTIONS} placeholder="Select deployment approach..." />
                        </FormField>
                        <FormField label="📈 Scaling & Performance Requirements">
                           <Select name="scalingRequirements" selected={formData.scalingRequirements as string} onChange={handleSelectChange} options={o.DEPLOYMENT_SCALING_OPTIONS} placeholder="Select scaling requirements..." />
                        </FormField>
                        <FormField label="🔧 DevOps & Automation Requirements">
                             <MultiSelect name="devopsRequirements" options={o.DEPLOYMENT_DEVOPS_OPTIONS} selected={formData.devopsRequirements as string[] || []} onChange={handleMultiSelectChange} />
                        </FormField>
                         <FormField label="🔄 Maintenance & Support Strategy">
                           <Select name="maintenanceStrategy" selected={formData.maintenanceStrategy as string} onChange={handleSelectChange} options={o.DEPLOYMENT_MAINTENANCE_OPTIONS} placeholder="Select maintenance approach..." />
                        </FormField>
                    </>
                );
            default:
                return <div>Section <span className="font-bold text-brand-accent">{sectionKey}</span> not found.</div>;
        }
    };

    return <div className="bg-brand-surface/30 p-6 rounded-lg border border-gray-700">{renderSection()}</div>;
};
