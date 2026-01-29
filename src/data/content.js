export const profile = {
  name: 'Jai Murugan C',
  role: 'MERN Stack Developer',
  location: 'Salem,India',
  email: 'jaimurugan1703@gmail.com',
  phone: '+91 7708338349',
  socials: {
    github: 'https://github.com/Jaimurugan-c',
    linkedin: 'https://www.linkedin.com/in/jaimuruganchandiran/',
    portfolio: '/',
  },
  cvUrl: '/Jai_Murugan_C_CV.pdf',
  hero: {
    headlinePrefix: "Hello, I'm",
    headlineName: 'Jai Murugan C',
    typing: ['MERN Stack Developer', 'PERN Stack Developer ','React.js Developer', 'Node.js Developer'],
  },
}

import {
  Code,
  Server,
  Database,
  Wrench,
  Users,
} from 'lucide-react'

export const skillsGrouped = [
  {
    title: 'Frontend',
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Postman','Linux'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    items: ['Time Management', 'Problem Solving', 'Communication'],
  },
]


export const experience = [
  {
    type: 'job',
    role: 'PERN Stack Developer',
    company: 'Teamup Consultants (Internship)',
    period: 'Sep 2025 - Nov 2025',
    points: [
      'Developed full-stack PERN applications with PostgreSQL, Express.js, React.js, and Node.js',
      'Built RESTful APIs and designed efficient database schemas',
      'Implemented responsive and accessible UI components',
    ],
  },
  {
    type: 'job',
    role: 'MERN Stack Developer',
    company: 'Techforge (Internship)',
    period: 'Jan 2025 - Aug 2025',
    points: [
      'Full-Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js',
      'Developed 10+ dynamic, scalable full-stack web applications',
      'Integrated third-party APIs and payment gateways (Razorpay/Stripe)',
    ],
  },
  {
    type: 'job',
    role: 'Frontend Developer',
    company: 'Techforge (Internship)',
    period: 'Jul 2024 - Dec 2024',
    points: [
      'Developed responsive and interactive user interfaces using HTML5, CSS3, JavaScript, and React',
      'Created pixel-perfect, mobile-first designs with Tailwind CSS',
      'Optimized web performance, accessibility (WCAG), and SEO',
    ],
  },
  {
    type: 'education',
    role: "Bachelor's in Computer Science",
    company: 'Sona College of Arts and Science, Salem, Tamil Nadu',
    period: '2021 - 2024',
    points: [
      'Graduated with honors',
      'Specialized in Web Development & Software Engineering',
      'Completed multiple academic projects in full-stack development',
    ],
  },
]

export const projects = {
  mern: [
    {
      slug: 'taskflow-mern',
      title: 'Jai Blog (MERN)',
      subtitle: 'Admin Panel with Login & Auth | MERN Stack Blog Application',
      description:
        'A full-stack personal blog application built using the MERN stack. This platform allows an admin to securely log in and manage blog content, while users can explore blogs focused on travel, books, movies, and personal writings. The application is designed with a clean UI and a scalable backend, showcasing real-world CRUD operations and authentication flow.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
      screenshots: ['/projects/main.png', '/projects/adminblog.png','/projects/main2.png'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/Jaimurugan-c/jaiblog',
      highlights: [
        'Categorized blog content (Travel, Books, Movies, Writing',
        'RESTful API using Express & Node.js',
        'React-based frontend with smooth navigation',
        'JWT-based authentication for admin login',
      ],
    },
    {
      slug: 'shopcart-mern',
      title: 'Shopy (MERN)',
      subtitle: 'E-commerce storefront + admin panel',
      description:
        'A full-stack e-commerce web application developed using the MERN stack, designed to simulate a real-world online shopping experience. The platform includes a secure admin panel for managing products, categories, orders, and users, while customers can browse products, add items to the cart, and place orders through an intuitive interface.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      screenshots: ['/projects/ecom.png', '/projects/adminshop.png','/projects/shopy2.png'],
    
      github: 'https://github.com/Jaimurugan-c/E-comMern',
      highlights: ['Product catalog', 'Cart & checkout UX', 'Admin product management'],
    },
  ],
  web: [
    {
      title: 'Landing Page UI',
      subtitle: 'Clean responsive marketing page',
      tech: ['HTML', 'Bootstrap', 'JavaScript'],
      liveDemo: 'https://freshyy-landing.vercel.app/',
      github: 'https://github.com/Jaimurugan-c/freshyy-landing-',
    },
    {
      title: 'Coffee shop Website',
      subtitle: 'Responsive multi-section layout',
      tech: ['HTML', 'CSS', 'JavaScript','Tailwind CSS'],
      liveDemo: 'https://resturnant.vercel.app/',
      github: 'https://github.com/Jaimurugan-c/resturnant',
    },
  ],
}
