export const profile = {
  name: 'Nahom Woldeab',
  role: 'Software Engineer',
  location: 'Lorton, VA',
  email: 'nahom1wm@gmail.com',
  phone: '(571) 594-4856',
  linkedIn: 'https://www.linkedin.com/in/nahom-woldeab-98a8b4120/',
  github: 'https://github.com/nwol',
  summary:
    'Highly motivated software engineer with 6+ years of experience developing, testing, and debugging high-performing software. Skilled across backend architecture, web development, infrastructure, and database management, with a strong eye for detail and a passion for learning new technologies.',
};

export const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export const resume = {
  label: "Nahom Woldeab's Resume",
  file: publicAsset('Nahom-Woldeab-Resume.pdf'),
  downloadName: 'Nahom-Woldeab-Resume.pdf',
};

export const highlights = [
  'Distributed web applications for 39,000+ registrars and companies',
  'React, TypeScript, Java, Spring, PostgreSQL, Docker, and OpenStack',
  'Frontend modernization, test optimization, accessibility, and mentoring',
];

export const impactMetrics = [
  { value: '6+', label: 'Years building software' },
  { value: '39K+', label: 'Registrars and companies supported' },
  { value: '50%', label: 'Frontend PR cloud build reduction' },
  { value: '30%', label: 'Selenium runtime improvement' },
];

export const experiences = [
  {
    company: 'Verisign',
    title: 'Software Engineer II',
    location: 'Reston, VA',
    period: 'February 2022 - Present',
    bullets: [
      'Developed distributed web applications using React, Spring, PostgreSQL, Docker, and OpenStack for 39,000+ registrars and companies.',
      'Created a modern React frontend using Zustand store patterns and TanStack tooling.',
      'Optimized Selenium automation test runtime by 30% through parallel execution configuration.',
      'Reduced GitHub pull-request cloud build time for the frontend by 50%.',
      'Built modular components for a company-wide custom React UI library, improving code reuse across the organization.',
      'Led the migration of a notifications management system from Thymeleaf to React.',
      'Presented technical talks on existing products, projects, and new Java features including virtual threads.',
      'Mentored new hires and interns on project workflows and the technology stack.',
    ],
  },
  {
    company: 'Pyramid Systems Inc.',
    title: 'Software Engineer',
    location: 'Fairfax, VA',
    period: 'May 2020 - February 2022',
    bullets: [
      "Led frontend development for the SEC's claims web application using Angular.",
      'Increased Angular Jest unit test coverage from 15% to 70%.',
      'Suggested and implemented lazy loading, improving page load times by 40%.',
      'Developed shared components and service modularity to enhance code reusability.',
      'Created accessible frontend experiences aligned to Section 508 and WCAG 2.0 AA standards, tested with JAWS.',
      'Collaborated with UI/UX design to meet project design requirements.',
    ],
  },
];

export const education = {
  school: 'George Mason University',
  degree: 'B.S. in Applied Computer Science: Software Engineering',
  location: 'Fairfax, VA',
  period: '2014 - 2019',
};

export const skillGroups = [
  {
    label: 'Most Used Stack',
    detail:
      'The tools I use most often in production work, especially across modern frontend, backend services, and registrar-facing web systems.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    label: 'Testing & Delivery',
    detail:
      'Tooling I use to keep releases reliable, speed up feedback loops, and improve confidence before changes reach production.',
    skills: ['Selenium', 'Jest', 'Jenkins', 'BrowserStack', 'Percy'],
  },
  {
    label: 'Infrastructure & Operations',
    detail:
      'Platform and automation tools from distributed app hosting, Linux workflows, and infrastructure-focused delivery work.',
    skills: ['Linux', 'OpenStack', 'Ansible', 'Bash', 'Groovy'],
  },
  {
    label: 'Product & Project Tools',
    detail:
      'Technologies used across personal and earlier client projects, including cloud-backed apps and cross-platform experiments.',
    skills: ['Angular', 'Express.js', 'Firebase', 'Firestore', 'Google Cloud', 'Svelte', 'Flutter', 'Go', 'Tailwind'],
  },
];

export const orderedSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Docker',
  'Git',
  'Selenium',
  'Jest',
  'Jenkins',
  'Linux',
  'OpenStack',
  'Angular',
  'Express.js',
  'Firebase',
  'Ansible',
  'Bash',
  'Groovy',
  'BrowserStack',
  'Percy',
  'Firestore',
  'Google Cloud',
  'Svelte',
  'Flutter',
  'Go',
  'Tailwind',
];

export const projects = [
  {
    name: 'Subspace',
    description:
      'A Reddit/Twitter-style social app built with Docker, Go, Svelte, and Flutter, hosted on Fly.io.',
    detail:
      'Focused on full-stack product architecture across backend services, web UI, mobile client work, containerization, and cloud hosting.',
    tags: ['Go', 'Svelte', 'Flutter', 'Docker', 'Fly.io'],
  },
  {
    name: 'Mason Parking',
    description:
      'A React app that helps users locate campus parking spots using Google Maps API, Express.js, Firestore/Firebase, and Google Cloud.',
    detail:
      'Built around a practical campus workflow: map-based discovery, cloud data storage, API integration, and a responsive React interface.',
    tags: ['React', 'Google Maps API', 'Express.js', 'Firebase', 'Google Cloud'],
  },
  {
    name: 'Meme Generator',
    description:
      'A React app for generating and storing memes on Firebase with Express.js and image editing/generation packages.',
    detail:
      'Explored image generation workflows, NoSQL persistence, backend API support, and a fast interface for creating and saving content.',
    tags: ['React', 'Express.js', 'Firebase', 'NoSQL'],
  },
];

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];
