export const services = [
  {
    id: 'web',
    icon: 'Monitor',
    title: 'Web Design & Development',
    description: 'We craft high-performance websites and web applications that combine stunning aesthetics with bulletproof functionality. From marketing sites to complex web platforms.',
    features: ['Custom Design', 'React / Next.js', 'CMS Integration', 'Performance Optimization'],
  },
  {
    id: 'branding',
    icon: 'Palette',
    title: 'Branding & Identity',
    description: 'Strategic brand identities that communicate your values, resonate with your audience, and differentiate you in a crowded market. Logos, guidelines, and everything in between.',
    features: ['Logo Design', 'Brand Strategy', 'Visual Guidelines', 'Brand Collateral'],
  },
  {
    id: 'ux',
    icon: 'Layers',
    title: 'UI/UX Design',
    description: 'User-centered design that transforms complex problems into elegant, intuitive interfaces. We research, prototype, and validate every interaction before a single line of code is written.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    id: 'marketing',
    icon: 'TrendingUp',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that put your brand in front of the right people at the right moment. SEO, paid campaigns, and conversion optimization that actually moves the needle.',
    features: ['SEO Strategy', 'Paid Campaigns', 'Analytics & Reporting', 'Conversion Rate Optimization'],
  },
  {
    id: 'social',
    icon: 'Share2',
    title: 'Social Media Management',
    description: 'Compelling social content and community management that builds authentic connections with your audience. Strategic, consistent, and always on-brand across every platform.',
    features: ['Content Strategy', 'Creative Production', 'Community Management', 'Growth Analytics'],
  },
];

export type ProjectCategory = 'All' | 'Branding' | 'Web' | 'UI/UX' | 'Marketing';

export const projects = [
  {
    id: 1,
    title: 'Nomad Coffee Co.',
    category: 'Branding',
    tags: ['Brand Identity', 'Packaging', 'Web'],
    description: 'Complete brand identity and digital presence for an artisanal specialty coffee roaster targeting urban millennials.',
    year: '2024',
    color: '#2a1f14',
    accent: '#c8a96e',
    image: 'coffee',
  },
  {
    id: 2,
    title: 'Meridian Finance',
    category: 'Web',
    tags: ['Web Design', 'Development', 'UI/UX'],
    description: 'A sophisticated financial platform redesign that increased user engagement by 240% and reduced churn dramatically.',
    year: '2024',
    color: '#0d1f2d',
    accent: '#3d7a78',
    image: 'finance',
  },
  {
    id: 3,
    title: 'Soleil Skincare',
    category: 'UI/UX',
    tags: ['UI/UX Design', 'E-Commerce', 'Mobile'],
    description: 'Luxury e-commerce experience for a premium skincare brand, with a focus on tactile digital storytelling.',
    year: '2024',
    color: '#1f1a14',
    accent: '#c45c5c',
    image: 'skincare',
  },
  {
    id: 4,
    title: 'Vaulted Architecture',
    category: 'Web',
    tags: ['Web Design', 'Branding', 'Photography'],
    description: 'Award-winning portfolio site for a boutique architecture firm blending editorial photography with immersive design.',
    year: '2023',
    color: '#141414',
    accent: '#9a9a9a',
    image: 'architecture',
  },
  {
    id: 5,
    title: 'Pulse Health App',
    category: 'UI/UX',
    tags: ['Mobile App', 'UI/UX', 'Prototyping'],
    description: 'Intuitive health tracking app that simplifies complex wellness data through beautiful, accessible interfaces.',
    year: '2023',
    color: '#0d1a1a',
    accent: '#3d7a78',
    image: 'health',
  },
  {
    id: 6,
    title: 'Alchemy Spirits',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Social Media', 'Campaign'],
    description: 'Integrated digital launch campaign for a premium spirits brand that generated 2M+ organic impressions in week one.',
    year: '2023',
    color: '#1a0f1a',
    accent: '#a8893e',
    image: 'spirits',
  },
];

export const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '94%', label: 'Client Retention' },
  { value: '8+', label: 'Years of Excellence' },
  { value: '3×', label: 'Average Revenue Uplift' },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start by deeply understanding your business, your audience, and the problem you need to solve. No assumptions — just honest listening and sharp questions.',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'From research, we build a clear strategic foundation: positioning, messaging, creative direction, and a plan that aligns design with business goals.',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Our creative team brings the strategy to life with precision. We iterate rapidly, present clearly, and refine obsessively until every detail is right.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'We launch with care, ensuring a flawless handoff and continued support. Our work doesn\'t end at delivery — it begins there.',
  },
];

export const testimonials = [
  {
    id: 1,
    quote: 'AURA didn\'t just redesign our website — they transformed how we present ourselves to the world. Our lead quality improved dramatically, and the site routinely earns compliments from new clients before we\'ve even spoken.',
    name: 'Cassandra Lee',
    role: 'Chief Marketing Officer',
    company: 'Meridian Capital Group',
    initials: 'CL',
    accent: '#3d7a78',
  },
  {
    id: 2,
    quote: 'Working with AURA was genuinely one of the best business decisions we\'ve made. They pushed our thinking, challenged our assumptions, and delivered a brand identity that feels completely authentic and completely premium.',
    name: 'Thomas Vance',
    role: 'Founder & CEO',
    company: 'Nomad Coffee Co.',
    initials: 'TV',
    accent: '#c8a96e',
  },
  {
    id: 3,
    quote: 'The level of craft and attention to detail is unlike anything I\'ve experienced with an agency. They treat every pixel like it matters — because to them, it does. I\'ve recommended AURA to every founder I know.',
    name: 'Priya Sharma',
    role: 'Co-Founder',
    company: 'Soleil Skincare',
    initials: 'PS',
    accent: '#c45c5c',
  },
];

export const brandClients = [
  'Nomad Coffee Co.', 'Meridian Capital', 'Soleil Skincare', 'Vaulted Architecture',
  'Pulse Health', 'Alchemy Spirits', 'Vertex Labs', 'Crest & Co.',
];
