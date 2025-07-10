import { GoogleGenAI, Type } from "@google/genai";
import type { FormDataShape, GeneratedPrompts, SectionKey } from '../types';
import { SECTIONS } from "../constants";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getSelectedValues = (data: FormDataShape, key: string): string => {
    const value = data[key];
    if (Array.isArray(value) && value.length > 0) {
        return value.join(', ');
    }
    if (typeof value === 'string' && value) {
        return value;
    }
    return 'Not specified';
};

const getSectionDataAsMarkdown = (title: string, data: FormDataShape, fields: {key: string, label: string}[]) => {
    const relevantEntries = fields.map(field => {
        const value = getSelectedValues(data, field.key);
        return value !== 'Not specified' ? `*   **${field.label}:** ${value}` : null;
    }).filter(Boolean);

    if (relevantEntries.length === 0) return '';

    return `### ${title}\n${relevantEntries.join('\n')}\n`;
}


export const generatePrompts = async (data: FormDataShape): Promise<GeneratedPrompts> => {
    const model = 'gemini-2.5-flash';

    const selectedSections = SECTIONS.filter(s => data[s.key] === "true");

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            master: { type: Type.STRING, description: "The main, overarching master prompt that defines the entire project vision and structure. It acts as the constitution for the entire project." },
            technical: { type: Type.STRING, description: "A detailed prompt for generating technical architecture, including stack, APIs, and infrastructure." },
            database: { type: Type.STRING, description: "A detailed prompt for designing the database schema, including tables, columns, relationships, and justifications." },
            design: { type: Type.STRING, description: "A detailed prompt for creating the UI/UX design, focusing on design psychology, user flows, and visual language." },
            business: { type: Type.STRING, description: "A detailed prompt for defining the business logic, marketing strategy, and monetization models." },
            advanced: { type: Type.STRING, description: "A detailed prompt for AI integration, machine learning models, and innovative/emerging technologies." },
            quality: { type: Type.STRING, description: "A detailed prompt for establishing a quality assurance plan, including testing strategies and performance benchmarks." },
            workflow: { type: Type.STRING, description: "A prompt to generate detailed user stories, user flows, and process workflows, using Mermaid syntax for diagrams." },
            marketing: { type: Type.STRING, description: "A detailed prompt for creating a marketing and growth strategy, including SEO, content, and automation." },
            deployment: { type: Type.STRING, description: "A detailed prompt for outlining the deployment, CI/CD, and maintenance plan." },
            handover: { type: Type.STRING, description: "A concise session handover prompt that summarizes the project state and next steps, to ensure context continuity." }
        }
    };
    
    const projectName = data.projectName || 'an innovative new digital product';

    const systemInstruction = `You are a council of world-class system architects, genius prompt engineers, and expert business strategists, each with over 25 years of experience in building market-dominating software. Your designation is "The Cycops Architect Council." Your mission is to interpret a user's high-level vision and expand it into an exhaustive, profoundly detailed suite of prompts.

These prompts are destined for a sophisticated No-Code AI platform that will materialize the application. Therefore, ambiguity is unacceptable. Every prompt you generate must be a self-contained, encyclopedic masterpiece of clarity. Assume the AI platform is powerful but requires explicit, granular instructions for every aspect of the application, from database indexing to the psychological underpinnings of the color scheme.

Your output MUST be a single, valid JSON object that strictly adheres to the provided schema. Do not output anything before or after the JSON object. Do not write the application code itself; your sole purpose is to craft the ultimate set of prompts that will guide the AI to generate that code. The user's inputs are the seed; your job is to grow them into a forest of revolutionary product specifications.`;
    
    // Constructing the detailed user prompt for the AI
    const userPrompt = `
# ULTIMATE PROMPT ECOSYSTEM GENERATION REQUEST

**PROJECT:** "${projectName}"

**ARCHITECT COUNCIL DIRECTIVE:** Analyze the following user specifications and generate the complete, production-grade prompt ecosystem in the required JSON format. Each generated prompt must be exceptionally detailed and self-sufficient.

---
## I. CORE PROJECT DNA
${getSectionDataAsMarkdown('Foundation Engineering', data, [
    {key: 'projectVision', label: 'Project Vision & Strategic Objective'},
    {key: 'projectDescription', label: 'User-Provided Description'},
    {key: 'projectType', label: 'Project Type'},
    {key: 'complexityLevel', label: 'Project Complexity'},
    {key: 'targetAudience', label: 'Target Audience'},
    {key: 'primaryObjectives', label: 'Primary Business Objectives'},
    {key: 'industryContext', label: 'Industry Context & Compliance'},
])}
${selectedSections.find(s=>s.key === 'technical') ? getSectionDataAsMarkdown('Technical Architecture', data, [
    {key: 'systemCapabilities', label: 'Core System Capabilities'},
    {key: 'performanceRequirements', label: 'Performance Requirements'},
    {key: 'integrationRequirements', label: 'Integration Requirements'},
    {key: 'securityRequirements', label: 'Security Requirements'},
]) : ''}
${selectedSections.find(s=>s.key === 'database') ? getSectionDataAsMarkdown('Database Architecture', data, [
    {key: 'databaseType', label: 'Database Type'},
    {key: 'dataEntities', label: 'Core Data Entities'},
    {key: 'userGeneratedContent', label: 'User-Generated Content'},
    {key: 'dataScalability', label: 'Data Scalability Needs'},
]) : ''}
${selectedSections.find(s=>s.key === 'design') ? getSectionDataAsMarkdown('Design Psychology', data, [
    {key: 'designPhilosophy', label: 'Design Philosophy'},
    {key: 'colorStrategy', label: 'Color Psychology Strategy'},
    {key: 'colorScheme', label: 'Selected Color Palette'},
    {key: 'uiPatterns', label: 'Advanced UX/UI Patterns'},
    {key: 'animationLevel', label: 'Animation Sophistication'},
]) : ''}
${selectedSections.find(s=>s.key === 'business') ? getSectionDataAsMarkdown('Business Intelligence', data, [
    {key: 'revenueStrategy', label: 'Revenue Generation Strategy'},
    {key: 'marketStrategy', label: 'Market Positioning'},
    {key: 'growthStrategy', label: 'Growth & Scaling Strategy'},
    {key: 'businessMetrics', label: 'Key Performance Indicators (KPIs)'},
]) : ''}
${selectedSections.find(s=>s.key === 'advanced') ? getSectionDataAsMarkdown('AI & Innovation', data, [
    {key: 'aiIntegrationLevel', label: 'AI Integration Level'},
    {key: 'aiCapabilities', label: 'AI Capabilities'},
    {key: 'emergingTech', label: 'Emerging Technologies'},
]) : ''}
${selectedSections.find(s=>s.key === 'quality') ? getSectionDataAsMarkdown('Quality Assurance', data, [
    {key: 'testingProtocols', label: 'Testing & Quality Protocols'},
    {key: 'qualityStandards', label: 'Quality Standards & Benchmarks'},
    {key: 'monitoringRequirements', label: 'Monitoring & Analytics'},
]) : ''}
${selectedSections.find(s=>s.key === 'marketing') ? getSectionDataAsMarkdown('Growth Engineering', data, [
    {key: 'seoStrategy', label: 'SEO & Content Strategy'},
    {key: 'growthChannels', label: 'Primary Growth Channels'},
    {key: 'conversionOptimization', label: 'Conversion Optimization Strategy'},
]) : ''}
${selectedSections.find(s=>s.key === 'deployment') ? getSectionDataAsMarkdown('Deployment Mastery', data, [
    {key: 'deploymentStrategy', label: 'Deployment Strategy'},
    {key: 'scalingRequirements', label: 'Scaling Requirements'},
    {key: 'devopsRequirements', label: 'DevOps & Automation'},
    {key: 'maintenanceStrategy', label: 'Maintenance & Support'},
]) : ''}

---
## II. DETAILED PROMPT GENERATION DIRECTIVES

**INSTRUCTIONS:** Generate the JSON object containing the detailed prompts as defined in the schema. Follow these specific directives for each prompt:

1.  **master:** This is the constitution. Synthesize all inputs into a grand, overarching vision. Define the project's soul, its mission, its core value proposition, and the key pillars of its success. It should be inspiring and strategic. If the user didn't provide a description, generate a compelling one here based on the vision.

2.  **technical:** Create an exhaustive technical blueprint.
    *   **Architecture:** Propose a specific architecture (e.g., Microservices, Serverless, Monolith) and justify it.
    *   **Tech Stack:** Recommend specific frontend (e.g., React, Vue) and backend (e.g., Node.js, Python) technologies, including frameworks and libraries. Justify each choice.
    *   **API Design:** Specify an API style (e.g., RESTful, GraphQL). Define key resources/endpoints, request/response formats, and authentication methods (e.g., JWT).
    *   **Infrastructure:** Suggest a cloud provider (e.g., AWS, GCP) and specific services (e.g., EC2, S3, Lambda, RDS).
    *   **Security:** Detail a multi-layered security plan based on the user's requirements.

3.  **database:** Design the complete data model. This is critical.
    *   **Justification:** Justify the chosen database type (e.g., PostgreSQL for relational integrity, MongoDB for flexibility).
    *   **Schema:** For each data entity, define a table/collection. For each, specify columns/fields with data types (e.g., \`SERIAL PRIMARY KEY\`, \`VARCHAR(255)\`, \`TEXT\`, \`TIMESTAMP WITH TIME ZONE\`, \`BOOLEAN\`), constraints (\`NOT NULL\`, \`UNIQUE\`), and descriptions.
    *   **Relationships:** Explicitly define all relationships (e.g., one-to-many, many-to-many) and specify foreign keys.
    *   **Indexing:** Recommend specific indexes to optimize common queries.
    *   **ERD:** Generate a MermaidJS Entity Relationship Diagram (ERD) representing the schema.

4.  **design:** Create a comprehensive design and UX guide based on psychological principles.
    *   **User Personas:** Elaborate on the target audience with 2-3 detailed user personas.
    *   **User Journey Mapping:** Map out the primary user journey from discovery to conversion/retention.
    *   **Visual Language:** Define the typography (font families, weights, hierarchy), iconography style, and spacing system.
    *   **Color Psychology:** Elaborate on the chosen color palette, explaining the psychological impact of each color choice in the context of the app's goals.
    *   **UI Patterns:** Describe how the selected UI patterns should be implemented with flair and purpose.

5.  **workflow:** Detail the application's logic and flow.
    *   **User Stories:** Generate at least 10 detailed user stories in the format: "As a [persona], I want to [action] so that [benefit]."
    *   **Process Flows:** For 2-3 core processes (e.g., user onboarding, creating a post, checkout), create a step-by-step flowchart using MermaidJS syntax.

6.  **business:** Formulate a strategic business plan.
    *   **Monetization:** Detail how the selected revenue strategies will be implemented (e.g., subscription tiers with specific features, transaction fee percentages).
    *   **Market Positioning:** Elaborate on the market strategy with actionable steps.
    *   **KPIs:** For each selected KPI, define how it will be measured and what the initial success targets are.

7.  **advanced:** Architect a forward-thinking AI and innovation strategy.
    *   **AI Integration:** Detail the plan for the selected AI integration level. If 'AI-First', describe how the entire application architecture will revolve around AI.
    *   **ML Models:** For each selected AI capability, propose specific machine learning models or approaches (e.g., 'Use a Transformer-based model like BERT for NLP', 'Implement a collaborative filtering model for recommendations').
    *   **Innovation:** For each selected emerging technology, describe a tangible use case within the project and outline an implementation strategy.

8.  **quality:** Create a rigorous Quality Assurance and testing plan.
    *   **Testing Strategy:** For each selected protocol, describe the specific approach (e.g., for E2E testing, list key user journeys to automate).
    *   **Tooling:** Recommend specific tools for testing, monitoring, and error tracking (e.g., Jest, Cypress, Sentry, Grafana).
    *   **Benchmarks:** Define specific, measurable benchmarks for performance (e.g., Core Web Vitals targets) and accessibility (e.g., WCAG 2.1 AA).

9.  **marketing:** Develop a go-to-market and growth engineering strategy.
    *   **SEO:** Outline a content-driven SEO strategy, including keyword clusters and content pillar ideas.
    *   **Growth Loops:** Design a primary growth loop (e.g., viral referral, content-driven).
    *   **Channels:** For each selected channel, provide a specific tactical approach.

10. **deployment:** Outline a modern DevOps and deployment strategy.
    *   **CI/CD Pipeline:** Describe the stages of the CI/CD pipeline (e.g., build, test, lint, deploy to staging, manual approval, deploy to production).
    *   **Environments:** Define the necessary environments (e.g., development, staging, production).
    *   **Monitoring & Alerts:** Specify what key metrics to monitor and what conditions should trigger alerts.

11. **handover:** Create a concise, bulleted summary of the key decisions, generated assets, and strategic next steps. This is for ensuring context continuity between sessions.
`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.7,
            },
        });

        const jsonString = response.text.trim();
        const parsedJson = JSON.parse(jsonString);
        
        // Ensure all keys exist, even if the model fails to provide them
        const allKeys = Object.keys(responseSchema.properties);
        const completeJson: any = {};
        for (const key of allKeys) {
            completeJson[key] = parsedJson[key] || `(AI failed to generate this prompt. Please try again.)`;
        }
        
        return completeJson as GeneratedPrompts;

    } catch (err) {
        console.error("Gemini API call failed:", err);
        const errorMessage = err instanceof Error ? err.message : String(err);
        throw new Error(`Failed to generate prompts from AI. The model may be overloaded or the request was invalid. Details: ${errorMessage}`);
    }
};
