export type SectionKey = 'foundation' | 'technical' | 'database' | 'design' | 'business' | 'advanced' | 'marketing' | 'quality' | 'deployment';

export interface SectionConfig {
    key: SectionKey;
    title: string;
    description: string;
    status: 'Core Required' | 'Recommended' | 'Optional' | 'Advanced';
    icon: React.ReactNode;
}

export type FormDataShape = {
    [key: string]: string | string[] | undefined;
};

export interface GeneratedPrompts {
    master: string;
    technical: string;
    database: string;
    design: string;
    business: string;
    advanced: string;
    quality: string;
    workflow: string;
    marketing: string;
    deployment: string;
    handover: string;
    [key: string]: string;
}
