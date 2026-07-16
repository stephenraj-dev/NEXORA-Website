import { 
  Cloud, 
  Code2, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  Globe2,
  CheckCircle2,
  Users,
  Zap,
  Lock,
  Layers,
  HeartHandshake,
  Clock
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Bespoke enterprise software solutions built to scale with your business needs and optimize workflows.',
    icon: Code2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 2,
    title: 'Cloud Services',
    description: 'Seamless cloud migration, architecture design, and management using AWS, Azure, or Google Cloud.',
    icon: Cloud,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and predictive analytics to give your organization a competitive edge.',
    icon: Cpu,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users on iOS and Android.',
    icon: Smartphone,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    id: 5,
    title: 'Cyber Security',
    description: 'Comprehensive security audits and implementation to protect your digital assets and data.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    id: 6,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with powerful visualization and reporting tools.',
    icon: BarChart3,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  }
];

export const trustedCompanies = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.com',
    logo: (
      <svg viewBox="0 0 100 30" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.65 19.34c-1.32.72-3.15 1.15-4.94 1.15-4.48 0-7.38-2.61-7.38-7.53 0-5.11 3.25-7.79 7.82-7.79 1.83 0 3.3.43 4.41 1.05v2.89c-1.25-.8-2.67-1.18-4.22-1.18-2.73 0-4.6 1.58-4.6 4.88 0 3.13 1.63 4.77 4.54 4.77 1.66 0 3.24-.52 4.37-1.32v3.08zm8.68-14.16h3.18v1.84c1.15-1.38 2.84-2.12 4.85-2.12 1.61 0 3.01.52 4.02 1.49 1.29-1.29 3.01-1.49 4.36-1.49 3.39 0 5.42 2.01 5.42 5.57v8.52h-3.33v-8c0-1.89-.95-2.93-2.64-2.93-1.61 0-2.87.98-2.87 2.87v8.06h-3.33v-8c0-1.89-.95-2.93-2.64-2.93-1.66 0-2.87 1.03-2.87 2.87v8.06h-4.13V5.18zm31.06 7.03c0 4.19-2.81 7.23-7.23 7.23-4.36 0-7.18-3.04-7.18-7.23 0-4.25 2.87-7.29 7.29-7.29 4.36 0 7.12 2.98 7.12 7.29zm-11.02 0c0 2.58 1.43 4.48 3.84 4.48 2.35 0 3.84-1.9 3.84-4.48 0-2.64-1.49-4.54-3.84-4.54-2.42 0-3.84 1.9-3.84 4.54zm13.14 7.12V5.18h3.15v1.89c1.09-1.43 2.76-2.18 4.77-2.18 3.44 0 5.62 2.12 5.62 5.8 0 4.02-2.3 5.91-5.62 5.91-1.95 0-3.79-.75-4.77-2.12v4.88h-3.15zm8.15-11.25c-2.35 0-3.84 1.84-3.84 4.48 0 2.58 1.49 4.36 3.84 4.36 2.3 0 3.79-1.78 3.79-4.36 0-2.58-1.49-4.48-3.79-4.48zm22.42-2.89v11.25h-3.21v-1.84c-1.15 1.32-2.81 2.12-4.85 2.12-3.39 0-5.51-2.07-5.51-5.63 0-3.67 2.24-5.68 5.62-5.68 1.84 0 3.5.75 4.6 1.95v-2.18h3.35zm-8.03 8.32c0 2.47 1.43 4.25 3.67 4.25 2.3 0 3.67-1.78 3.67-4.25 0-2.53-1.38-4.31-3.67-4.31-2.24 0-3.67 1.78-3.67 4.31zM36.17 19.34h3.38L34.1 5.18h-4.02L24.6 19.34h3.39l1.66-4.65h6.83l1.69 4.65zm-2.58-7.35l-2.47-7h-.11l-2.47 7h5.05zm2.84 12.39c-1.49 1.43-5.05 3.1-9.98 3.1-6.14 0-11.48-2.07-15.04-5.45-.63-.63-.11-1.43.75-1.15 4.36 1.55 9.7 2.41 14.87 2.41 3.5 0 6.66-.46 9.47-1.26.75-.23 1.21.63.57 1.26h-.64v1.09z" />
        <path d="M40.18 24.39c-1.21-1.32-3.79-1.21-3.62.29.11 1.09 2.53 1.84 4.02 1.66 1.61-.17 2.3-1.61 2.01-2.47-1.43-4.54-7.23-5.28-7.23-5.28s1.61 3.73 3.62 4.48c0 0 .52.06 1.2 1.32z" />
      </svg>
    ),
    color: 'hover:text-[#FF9900]'
  },
  {
    name: 'Google',
    url: 'https://www.google.com',
    logo: (
      <svg viewBox="0 0 100 30" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.7 13.9h-16v5.8h9.3c-1.2 5.1-6.5 7.9-10.8 5.9-4.8-2.2-6.5-9.3-3.2-13.9 3-4.3 9.4-4.7 13.2-1l4.2-4.1c-6-5.8-15.7-5.9-21.7-.5-6 5.4-6.4 14.9-.7 20.8 5.7 5.9 15.3 5.9 21.3.1 5.5-5.3 6.1-14.7 4.4-13.1zm11.7-6.5c-6.1 0-11 4.7-11 11s4.9 11 11 11 11-4.7 11-11-4.9-11-11-11zm0 17.6c-2.9 0-5.3-2.3-5.3-6.6s2.4-6.6 5.3-6.6 5.3 2.3 5.3 6.6-2.4 6.6-5.3 6.6zm23.6-17.6c-6.1 0-11 4.7-11 11s4.9 11 11 11 11-4.7 11-11-4.9-11-11-11zm0 17.6c-2.9 0-5.3-2.3-5.3-6.6s2.4-6.6 5.3-6.6 5.3 2.3 5.3 6.6-2.4 6.6-5.3 6.6zm21.5-17.6c-3.1 0-5.8 1.2-7.7 3.3l1.8 14V3h-5.6v24.6h5.4v-2c2.1 2.3 5.1 3.4 8.2 3.4 5.9 0 10.6-4.7 10.6-11s-4.8-11-12.7-11.3zm-.8 17.6c-2.9 0-5.2-2.3-5.2-6.6s2.3-6.6 5.2-6.6c2.9 0 5.3 2.3 5.3 6.6s-2.4 6.6-5.3 6.6zm13.1-23.7v24.6h5.6V7.7h-5.6zm17.9 6.1c-4.4-.6-8.7 1.5-10.5 5.5l5.1 2.1c1-1.9 3.2-2.7 5.2-2.1 2.2.6 3.6 2.5 3.6 4.7-6.4 0-11.8 2.6-11.8 8.1 0 3.7 2.8 6.4 6.6 6.4 2.8 0 5.5-1.4 6.9-3.7v3h5.3v-11c0-5.2-3.8-10.2-10.4-11.5zm.9 17.6c-2 0-3.6-1.1-3.6-2.9 0-2.4 2.7-3.4 5.8-3.5 1.5 0 2.9.3 4.2.8-1.1 3.5-4 5.6-6.4 5.6z" />
      </svg>
    ),
    color: 'hover:text-[#4285F4]'
  },
  {
    name: 'Shopify',
    url: 'https://www.shopify.com',
    logo: (
      <svg viewBox="0 0 100 30" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 2.2C11 1.7 8.5.5 8.5.5L7 7l-6 1.4L4.7 28l13 1.5 6-18.7-10.8-8.6zm-5.7 6.4l4.5-1-1.3-4.4c0 0 1.9.9 3.3 1.3l8.4 6.6-4.5 14-10.1-1.2-2.8-13.8L2 10.3l5.2-1.7zm32.8 10.5c0 1.2-.5 1.9-2.1 1.9-1.5 0-2.4-.6-2.8-1.5l-2.4 1.2c.8 1.8 2.5 2.8 5.3 2.8 3.5 0 5.4-1.8 5.4-4.5 0-2.8-2-3.7-4.6-4.4-1.7-.5-2.2-.9-2.2-1.6 0-1 .7-1.5 1.8-1.5 1.2 0 2 .5 2.5 1.3l2.2-1.3c-.8-1.5-2.2-2.5-4.7-2.5-3 0-4.9 1.6-4.9 4 0 2.6 1.9 3.5 4.3 4.2 1.7.5 2.2 1 2.2 1.9zm13.1-9h-2.9V6.1h-3.1V10h-2v2.4h2v7c0 2.5 1.3 3.9 4 3.9h2v-2.5h-1.6c-1.1 0-1.3-.4-1.3-1.4v-7h2.9v-2.4zm11.1 13V15c0-1.8-.8-2.6-2.2-2.6-1.5 0-2.5.9-2.5 2.6v8.2h-3.1v-13h3.1v1.6c.9-1.2 2-1.8 3.5-1.8 2.6 0 4.2 1.6 4.2 4.6v8.4h-3zm12.3 0V10.2h3.1v1.5c.8-1.2 2-1.8 3.6-1.8 3.1 0 5.2 2.1 5.2 6.7s-2.1 6.7-5.2 6.7c-1.6 0-2.8-.6-3.6-1.8v3.6h-3.1zm6.7-10.7c-1.7 0-2.9 1.2-2.9 4s1.2 4 2.9 4c1.7 0 2.9-1.2 2.9-4s-1.2-4-2.9-4zm15.4 10.7v-13h3.1v1.5c.9-1.2 2.2-1.8 3.8-1.8 3.4 0 5.5 2.1 5.5 6.7s-2.1 6.7-5.5 6.7c-1.6 0-2.9-.6-3.8-1.8v1.7h-3.1zm7.2-10.7c-1.8 0-3.1 1.2-3.1 4s1.3 4 3.1 4c1.8 0 3.1-1.2 3.1-4s-1.3-4-3.1-4zm16.5 10.7v-13h-3.1v13h3.1zm-1.5-14.7c1 0 1.8-.8 1.8-1.7 0-.9-.8-1.7-1.8-1.7s-1.7.8-1.7 1.7c0 .9.8 1.7 1.7 1.7zm17.9 14.7l-3.3-9.5h-3.3l5.1 13.6h-3.4v2.5h6.6l5.2-16.1h-3.3l-3.6 9.5z" />
      </svg>
    ),
    color: 'hover:text-[#95BF47]'
  },
  {
    name: 'Salesforce',
    url: 'https://www.salesforce.com',
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 15.6c-.5 0-.9.2-1.1.7l-4.5 11c-.3.7-1.1.9-1.8.4L18 24.3c-1-1-2.9-.4-3.1 1l-.8 7c-.1.7-.8 1.2-1.5 1h-.2c-3.7-.8-6.4-4-6.4-7.9 0-3 1.6-5.6 4.1-7 .4-.2.6-.7.5-1.2-.5-2.2-.1-4.5 1.2-6.3 1.6-2.2 4-3.6 6.8-3.9 3.6-.4 7 1.2 9 4 .3.4.8.6 1.3.4 1.1-.3 2.3-.3 3.4 0 1.6.5 3 1.6 3.9 3 1.5 2.4 1.9 5.5.9 8.2-.2.7-.9 1-1.6 1H29.5zm7.3 5.4c-1.3 0-2.3 1-2.3 2.4s1 2.4 2.3 2.4 2.3-1 2.3-2.4-1-2.4-2.3-2.4zm-1.1 5.9h2.3V32h-2.3v-5.1zm4.7 0c0-1.6 1-2.6 2.6-2.6 1.2 0 2 .6 2.4 1.6l-1.9.9c-.2-.5-.5-.7-.9-.7-.6 0-.9.4-.9 1.1v4.8h-2.3v-5.1zm8.7-2.6c2.4 0 3.7 1.5 3.7 3.8 0 2.3-1.4 3.9-3.7 3.9-2.3 0-3.7-1.6-3.7-3.9 0-2.3 1.4-3.8 3.7-3.8zm0 5.9c1 0 1.5-.7 1.5-2.1 0-1.3-.5-2.1-1.5-2.1s-1.5.8-1.5 2.1c0 1.4.5 2.1 1.5 2.1zm5.1-5.9h2.3v7.7H53v-7.7zm2.3 7.7h-2.3v-10h2.3v10zm3.8-5.6c0-1.4 1-2.2 2.6-2.2 1.2 0 2.1.5 2.6 1.4l-1.7 1.1c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9 1 0 .6.3.8 1.4 1.1 1.7.5 2.6 1.1 2.6 2.6 0 1.5-1 2.4-2.8 2.4-1.6 0-2.6-.7-3.1-1.9l1.8-1.1c.3.7.8 1.1 1.4 1.1.6 0 1-.3 1-1 0-.6-.3-.8-1.4-1.1-1.7-.5-2.6-1.1-2.6-2.6zm6.8-2.1h6V23h-3.7v1h3.4v1.8h-3.4v1.1H72v2h-6v-7.7zm10.7 0c2.4 0 3.7 1.5 3.7 3.8 0 2.3-1.4 3.9-3.7 3.9-2.3 0-3.7-1.6-3.7-3.9 0-2.3 1.4-3.8 3.7-3.8zm0 5.9c1 0 1.5-.7 1.5-2.1 0-1.3-.5-2.1-1.5-2.1s-1.5.8-1.5 2.1c0 1.4.5 2.1 1.5 2.1zm5.8-5.9c0-1.6 1-2.6 2.6-2.6 1.2 0 2 .6 2.4 1.6l-1.9.9c-.2-.5-.5-.7-.9-.7-.6 0-.9.4-.9 1.1v4.8h-2.3v-5.1zm8.3-2.6c2 0 3.5 1.1 3.5 3.3v4.4h-2.3v-4.1c0-1.1-.5-1.7-1.4-1.7-1 0-1.5.7-1.5 1.7v4.1h-2.3v-7.7h2.3v1c.5-.8 1.4-1 2.3-1h.2zm4.8 5.8c0 1.3 1 2 2.4 2 1.1 0 2-.4 2.5-1.2l1.6 1.2c-.9 1.2-2.3 1.8-4 1.8-2.5 0-4.1-1.4-4.1-3.8 0-2.3 1.4-3.8 3.8-3.8 2.4 0 3.7 1.5 3.7 3.7v.5h-5.9zm3.7-1.5c-.1-.9-.7-1.5-1.5-1.5-.9 0-1.5.6-1.6 1.5h3.1z" />
      </svg>
    ),
    color: 'hover:text-[#00A1E0]'
  },
  {
    name: 'Slack',
    url: 'https://www.slack.com',
    logo: (
      <svg viewBox="0 0 100 30" className="h-7 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.8 19.3c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3s1.3-3 3-3h3v3zm-3-8.8c-1.6 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3v3h-3zm13.1-6c1.6 0 3 1.3 3 3s-1.3 3-3 3h-3v-3c0-1.6 1.3-3 3-3zm0 17.7c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3h-3zm-14.5.3c0-1.6-1.3-3-3-3h-7.3c-1.6 0-3 1.3-3 3s1.3 3 3 3h7.3c1.6 0 3-1.3 3-3zm18.8-14.5c0 1.6 1.3 3 3 3h7.3c1.6 0 3-1.3 3-3s-1.3-3-3-3h-7.3c-1.6 0-3 1.3-3 3zm-5.8 13.1c1.6 0 3-1.3 3-3v-7.3c0-1.6-1.3-3-3-3s-3 1.3-3 3v7.3c0 1.6 1.3 3 3 3zm-4.3-17.4c-1.6 0-3 1.3-3 3v7.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-7.3c0-1.6-1.3-3-3-3zm34.2 14c-1.5 0-2.8-.7-3.7-2l1.6-1.7c.6.9 1.4 1.3 2.4 1.3 1.2 0 2-.7 2-1.7 0-1.1-.9-1.5-2.8-1.9-2.5-.5-4.2-1.3-4.2-3.8 0-2.3 1.8-3.9 4.3-3.9 1.6 0 2.8.6 3.6 1.7l-1.5 1.7c-.6-.7-1.3-1.1-2.2-1.1-1.1 0-1.7.7-1.7 1.5 0 1 .7 1.4 2.6 1.8 2.6.6 4.3 1.4 4.3 3.9.1 2.5-1.9 4.2-4.7 4.2zm6.2-.2V5.1h2.4v12.2h5.7v2h-8.1zm11.7.2c-1.4 0-2.7-.6-3.6-1.7V25h-2.4V8.4h2.4v1.6c.9-1.1 2.1-1.8 3.6-1.8 2.9 0 5 2.2 5 5.7s-2.1 5.7-5 5.7zm-.6-9.5c-1.7 0-3 1.3-3 3.8s1.3 3.8 3 3.8 3-1.3 3-3.8-1.3-3.8-3-3.8zm11.6 9.5c-3.1 0-5.3-2.2-5.3-5.7s2.2-5.7 5.3-5.7c2.1 0 3.7 1.1 4.5 2.7l-2 1.1c-.5-1-1.4-1.6-2.5-1.6-1.8 0-2.9 1.4-2.9 3.5s1.1 3.5 2.9 3.5c1.1 0 2-.6 2.5-1.6l2 1.1c-.8 1.6-2.4 2.7-4.5 2.7zm11.8 0l-3.5-4.6v4.6h-2.4V5.1h2.4v8.2l3.2-4.7h2.9l-3.8 5 4 5.9h-2.8z" />
      </svg>
    ),
    color: 'hover:text-[#4A154B]'
  }
];

export const whyChooseUsData = [
  {
    title: 'Engineering Excellence',
    description: 'Our team comprises elite engineers who follow best practices and write clean, maintainable code.',
    icon: Zap
  },
  {
    title: 'Experienced Team',
    description: 'Decades of combined experience in delivering enterprise-grade solutions across various industries.',
    icon: Users
  },
  {
    title: 'Scalable Architecture',
    description: 'We design systems that grow with your business, handling millions of requests with ease.',
    icon: Layers
  },
  {
    title: 'Secure Platform',
    description: 'Security is baked into our development lifecycle from day one, ensuring your data is always safe.',
    icon: Lock
  },
  {
    title: 'Agile Process',
    description: 'Iterative development allows us to adapt to changing requirements and deliver value faster.',
    icon: Clock
  },
  {
    title: '24x7 Support',
    description: 'Round-the-clock monitoring and dedicated support to keep your operations running smoothly.',
    icon: HeartHandshake
  }
];

export const processData = [
  { id: '01', title: 'Discovery', desc: 'Understanding your vision and requirements.' },
  { id: '02', title: 'Planning', desc: 'Mapping out architecture and timelines.' },
  { id: '03', title: 'Design', desc: 'Creating intuitive UI/UX prototypes.' },
  { id: '04', title: 'Development', desc: 'Writing clean, scalable code.' },
  { id: '05', title: 'Testing', desc: 'Rigorous QA and security audits.' },
  { id: '06', title: 'Deployment', desc: 'Smooth launch to production.' },
  { id: '07', title: 'Support', desc: 'Continuous maintenance and updates.' },
];

export const productsData = [
  {
    title: 'NEXORA HRMS',
    category: 'Human Resources',
    desc: 'Complete employee lifecycle management, payroll, and performance tracking.',
    features: ['Payroll Automation', 'Leave Management', 'Performance Reviews']
  },
  {
    title: 'NEXORA ERP',
    category: 'Enterprise Resource',
    desc: 'Unify your business processes, financials, supply chain, and operations.',
    features: ['Financial Tracking', 'Inventory Control', 'Supply Chain']
  },
  {
    title: 'NEXORA CRM',
    category: 'Customer Relations',
    desc: 'Build stronger customer relationships and drive sales growth efficiently.',
    features: ['Lead Tracking', 'Email Campaigns', 'Sales Analytics']
  }
];

export const statsData = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Global Clients', value: 120, suffix: '+' },
  { label: 'Countries Served', value: 25, suffix: '' },
  { label: 'Expert Developers', value: 150, suffix: '+' },
];

export const testimonialsData = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, GlobalTech',
    feedback: 'NEXORA completely transformed our legacy infrastructure. Their cloud migration strategy was flawless and saved us 40% in operational costs.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Apex Financial',
    feedback: 'The custom CRM they built for us has increased our sales efficiency tenfold. The UI is incredibly intuitive and the performance is unmatched.',
  },
  {
    name: 'Emma Watson',
    role: 'Director of Operations, Horizon Digital',
    feedback: 'Their team is highly professional, responsive, and truly understands enterprise needs. We consider NEXORA a strategic partner, not just a vendor.',
  }
];

export const faqData = [
  {
    q: 'How long does a typical software project take?',
    a: 'Project timelines vary depending on scope and complexity. A standard web application might take 3-4 months, while a comprehensive enterprise system can take 6-12 months. We provide detailed timelines during the planning phase.'
  },
  {
    q: 'Do you provide ongoing support after deployment?',
    a: 'Absolutely. We offer comprehensive maintenance and SLA-backed support packages to ensure your software remains secure, updated, and performs optimally post-launch.'
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We use modern, scalable tech stacks including React, Node.js, Python, Java, and Go. For cloud infrastructure, we are certified partners with AWS, Azure, and Google Cloud Platform.'
  },
  {
    q: 'How do you ensure the security of our data?',
    a: 'We implement industry best practices, including end-to-end encryption, regular penetration testing, SOC2 compliance standards, and secure coding guidelines to protect your data.'
  }
];
