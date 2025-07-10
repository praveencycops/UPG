
export const PROJECT_TYPE_OPTIONS = [
    { value: "SaaS Platform", label: "SaaS Platform (Software as a Service)" },
    { value: "E-commerce Ecosystem", label: "E-commerce Ecosystem" },
    { value: "Marketplace Platform", label: "Marketplace Platform" },
    { value: "Content Management System", label: "Content Management System" },
    { value: "Learning Management System", label: "Learning Management System" },
    { value: "Business Intelligence Platform", label: "Business Intelligence Platform" },
    { value: "Community Platform", label: "Community Platform" },
    { value: "Custom Enterprise Solution", label: "Custom Enterprise Solution" },
];

export const COMPLEXITY_OPTIONS = [
    { value: "Startup MVP", label: "🚀 Startup MVP (Rapid prototype, core features)" },
    { value: "Small Business Solution", label: "🏪 Small Business Solution (Professional grade)" },
    { value: "Enterprise Platform", label: "🏢 Enterprise Platform (Advanced features, high scale)" },
    { value: "Market Leader", label: "👑 Market Leader (Industry-defining, cutting-edge)" },
];

export const TARGET_AUDIENCE_OPTIONS = [
    'C-Level Executives', 'Software Developers', 'Small Business Owners', 'Marketing Professionals',
    'Sales Teams', 'Project Managers', 'Content Creators', 'E-commerce Merchants',
    'Healthcare Professionals', 'General Consumers'
];

export const SYSTEM_CAPABILITIES_OPTIONS = [
    'Advanced User Management & Authentication', 'Real-time Data Processing & Analytics', 'Advanced Payment & Billing Systems',
    'Dynamic Content Management System', 'Workflow Automation & Process Management', 'Multi-channel Communication Systems',
    'Advanced Reporting & Dashboard Systems', 'Extensive API & Third-party Integrations'
];

export const PERFORMANCE_REQUIREMENTS_OPTIONS = [
    { value: "Standard Performance", label: "Standard Performance (Good user experience)" },
    { value: "High Performance", label: "High Performance (Optimized for speed)" },
    { value: "Ultra Performance", label: "Ultra Performance (Sub-second loading)" },
    { value: "Global Scale Performance", label: "Global Scale Performance (CDN optimized)" },
];

export const INTEGRATION_REQUIREMENTS_OPTIONS = [
    'Payment Gateways (Stripe, etc)', 'CRM Systems (Salesforce, etc)', 'Analytics Platforms (Google Analytics, etc)',
    'Social Media Platforms', 'Cloud Storage (AWS S3, etc)', 'Authentication Services (Auth0, etc)'
];

export const SECURITY_REQUIREMENTS_OPTIONS = [
    'Enterprise-grade Security', 'Data Encryption (AES-256)', 'GDPR & Privacy Compliance',
    'HIPAA Compliance', 'Multi-factor Authentication', 'Advanced Role-based Access Control'
];

export const DATABASE_TYPE_OPTIONS = [
    { value: "SQL (e.g., PostgreSQL, MySQL)", label: "SQL (e.g., PostgreSQL, MySQL)" },
    { value: "NoSQL (e.g., MongoDB, Firestore)", label: "NoSQL (e.g., MongoDB, Firestore)" },
    { value: "Graph (e.g., Neo4j)", label: "Graph (e.g., Neo4j)" },
    { value: "Let AI Decide", label: "Let AI Decide Based on Project Needs" },
];

export const USER_CONTENT_OPTIONS = [
    'Text posts/comments', 'Image uploads', 'Video uploads', 'File attachments', 'User reviews/ratings'
];

export const DATA_SCALABILITY_OPTIONS = [
    { value: "High read, low write", label: "High read, low write (e.g., blog)" },
    { value: "High write, high read", label: "High write, high read (e.g., social media)" },
    { value: "Complex queries and relationships", label: "Complex queries & relationships" },
    { value: "Large binary object storage", label: "Large binary object storage (files, images)" },
];

export const DESIGN_PHILOSOPHY_OPTIONS = [
    { value: "Conversion Optimization", label: "Conversion Optimization (Maximize user actions)" },
    { value: "Trust Building", label: "Trust Building (Financial, healthcare, professional)" },
    { value: "Premium Luxury", label: "Premium Luxury (High-end, exclusive feel)" },
    { value: "User Engagement", label: "User Engagement (Social, community platforms)" },
    { value: "Productivity Focus", label: "Productivity Focus (Business tools, dashboards)" },
];

export const UI_PATTERNS_OPTIONS = [
    'Advanced Responsive Grids', 'Micro-interactions & Animations', 'Progressive Disclosure & Smart Forms',
    'Advanced Data Tables & Visualization', 'Smart Modal & Overlay Systems', 'Dynamic Dashboard Layouts'
];

export const ANIMATION_LEVEL_OPTIONS = [
    { value: "Minimal Elegance", label: "Minimal Elegance (Subtle, professional)" },
    { value: "Modern Smooth", label: "Modern Smooth (Contemporary, engaging)" },
    { value: "Dynamic Premium", label: "Dynamic Premium (Rich, sophisticated)" },
];

export const REVENUE_STRATEGY_OPTIONS = [
    'Subscription SaaS', 'Transaction Fees', 'Premium Features (Freemium)',
    'Enterprise Licensing', 'Marketplace Revenue', 'Advertising Revenue'
];

export const MARKET_STRATEGY_OPTIONS = [
    { value: "Market Leader", label: "Market Leader (Dominate existing market)" },
    { value: "Market Disruptor", label: "Market Disruptor (Challenge incumbents)" },
    { value: "Niche Specialist", label: "Niche Specialist (Focused market segment)" },
];

export const GROWTH_STRATEGY_OPTIONS = [
    'Viral Growth (Referrals)', 'Content Marketing (SEO)', 'Product-Led Growth',
    'Sales-Led Growth', 'Community-Driven'
];

export const BUSINESS_METRICS_OPTIONS = [
    'Monthly Recurring Revenue (MRR)', 'Customer Acquisition Cost (CAC)', 'Customer Lifetime Value (LTV)',
    'Conversion Rates', 'User Engagement & Retention', 'Net Promoter Score (NPS)'
];

export const AI_INTEGRATION_LEVEL_OPTIONS = [
    { value: "AI-First Architecture", label: "AI-First Architecture (Built around AI)" },
    { value: "AI-Enhanced Platform", label: "AI-Enhanced Platform (Core features powered by AI)" },
    { value: "AI-Assisted Features", label: "AI-Assisted Features (Selected helpers)" },
    { value: "No AI Integration", label: "No AI Integration" },
];

export const AI_CAPABILITIES_OPTIONS = [
    'Natural Language Processing', 'Predictive Analytics & Forecasting', 'AI-Powered Personalization',
    'Conversational AI & Chatbots', 'AI Content Generation', 'Computer Vision & Image Processing'
];

export const EMERGING_TECH_OPTIONS = [
    'Blockchain & Web3 Integration', 'AR/VR & Metaverse Support', 'Voice Interface & Speech Recognition', 'IoT Device Integration'
];

export const MARKETING_SEO_OPTIONS = [
    { value: "Aggressive SEO", label: "Aggressive SEO (Comprehensive optimization)" },
    { value: "Content-First SEO", label: "Content-First SEO (Blog & educational)" },
    { value: "Technical SEO", label: "Technical SEO (Performance focus)" },
];

export const MARKETING_GROWTH_CHANNELS_OPTIONS = [
    'Organic Search (SEO)', 'Paid Advertising (Google, etc)', 'Content Marketing',
    'Social Media & Community', 'Email Marketing', 'Referral Programs'
];

export const MARKETING_CONVERSION_OPTIONS = [
    'A/B Testing & Experimentation', 'Funnel Optimization', 'Landing Page Optimization', 'Dynamic Personalization'
];

export const QA_TESTING_PROTOCOLS_OPTIONS = [
    'Comprehensive Unit Testing', 'Integration & API Testing', 'End-to-End User Journey Testing',
    'Performance & Load Testing', 'Security & Penetration Testing', 'Accessibility & WCAG Testing'
];

export const QA_QUALITY_STANDARDS_OPTIONS = [
    'Lighthouse Performance Score 100/100', 'Core Web Vitals Optimization', 'WCAG 2.1 AA Accessibility Compliance',
    'SOC 2 Type II Security Standards', 'GDPR & Privacy Compliance'
];

export const QA_MONITORING_OPTIONS = [
    'Real-time System Monitoring', 'Advanced Error Tracking & Logging', 'Performance Analytics & Optimization', 'User Behavior & Journey Analytics'
];

export const DEPLOYMENT_STRATEGY_OPTIONS = [
    { value: "Cloud-Native (AWS, GCP, Azure)", label: "Cloud-Native (AWS, GCP, Azure)" },
    { value: "Serverless Architecture", label: "Serverless Architecture (Auto-scaling)" },
    { value: "Container-Based (Docker, K8s)", label: "Container-Based (Docker, Kubernetes)" },
];

export const DEPLOYMENT_SCALING_OPTIONS = [
    { value: "Startup Scale (1K-10K users)", label: "Startup Scale (1K-10K users)" },
    { value: "Growth Scale (10K-100K users)", label: "Growth Scale (10K-100K users)" },
    { value: "Enterprise Scale (100K-1M users)", label: "Enterprise Scale (100K-1M users)" },
    { value: "Global Scale (1M+ users)", label: "Global Scale (1M+ users)" },
];

export const DEPLOYMENT_DEVOPS_OPTIONS = [
    'CI/CD Pipeline Automation', 'Infrastructure as Code', 'Auto-scaling & Load Balancing',
    'Automated Backup & Recovery', 'Security Automation & Scanning', 'Advanced Monitoring & Alerting'
];

export const DEPLOYMENT_MAINTENANCE_OPTIONS = [
    { value: "Proactive Maintenance", label: "Proactive Maintenance (Predictive, automated)" },
    { value: "Continuous Deployment", label: "Continuous Deployment (Rolling updates)" },
    { value: "Blue-Green Deployment", label: "Blue-Green Deployment (Zero downtime)" },
];
