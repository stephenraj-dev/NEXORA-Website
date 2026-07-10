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
  "Acme Corp", "GlobalTech", "Nexus Industries", "Starlight Systems", 
  "Quantum Computing", "Apex Financial", "Horizon Digital", "Vanguard Web", "Summit Cloud", "Pioneer Data"
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
