export const profile = {
  name: 'Jai Murugan C',
  role: 'MERN Stack Developer',
  location: 'India',
  email: 'jaimuruganc@example.com',
  phone: '+91 00000 00000',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    portfolio: '/',
  },
  cvUrl: '/Jai_Murugan_C_CV.pdf',
  hero: {
    headlinePrefix: "Hello, I'm",
    headlineName: 'Jai Murugan C',
    typing: ['MERN Stack Developer', 'React.js Developer', 'Node.js Developer'],
  },
}

export const skillsGrouped = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    items: ['MongoDB'],
  },
  {
    title: 'Tools',
    items: ['GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Soft Skills',
    items: ['Time Management', 'Problem Solving', 'Communication'],
  },
]

export const experience = [
  {
    company: 'Your Company',
    role: 'MERN Stack Developer',
    period: '2024 - Present',
    points: [
      'Built responsive web experiences with React.js and Tailwind CSS.',
      'Developed REST APIs using Node.js and Express.js.',
      'Integrated MongoDB models and optimized queries for performance.',
    ],
  },
]

export const projects = {
  mern: [
    {
      slug: 'taskflow-mern',
      title: 'TaskFlow (MERN)',
      subtitle: 'Task management app with auth and dashboards',
      description:
        'A full-stack task management platform with secure authentication, role-based access, and a clean productivity-focused UI.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
      screenshots: ['/projects/taskflow-1.svg', '/projects/taskflow-2.svg'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/',
      highlights: [
        'JWT auth + protected routes',
        'CRUD tasks with filters and status',
        'Reusable components and clean UX',
      ],
    },
    {
      slug: 'shopcart-mern',
      title: 'ShopCart (MERN)',
      subtitle: 'E-commerce storefront + admin panel',
      description:
        'A scalable e-commerce app featuring product listings, cart, checkout flow, and admin management screens.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      screenshots: ['/projects/shopcart-1.svg', '/projects/shopcart-2.svg'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/',
      highlights: ['Product catalog', 'Cart & checkout UX', 'Admin product management'],
    },
  ],
  web: [
    {
      title: 'Landing Page UI',
      subtitle: 'Clean responsive marketing page',
      tech: ['HTML', 'Tailwind', 'JavaScript'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/',
    },
    {
      title: 'Restaurant Website',
      subtitle: 'Responsive multi-section layout',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/',
    },
  ],
}
