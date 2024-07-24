import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  postgresql,
  komikult,
  aws,
  c,
  django,
  fastapi,
  java,
  postman,
  python,
  leaderboard,
  math,
  movie,
  nyeusi,
  rutgers,
  cybertigers8075,
  goldenunicorn,
  headstarterai,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Development',
    icon: frontend,
  },
  {
    title: 'Software Development',
    icon: backend,
  },
  {
    title: 'Automation & Scripting',
    icon: ux,
  },
  {
    title: 'Cloud Solutions',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Amazon Web Services',
    icon: aws,
  },
  {
    name: 'C Programming Language',
    icon: c,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Fast API',
    icon: fastapi,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Postman',
    icon: postman,
  },
];

const experiences = [
  {
    title: 'BS Computer Science + Economics',
    company_name: 'Rutgers University',
    icon: rutgers,
    iconBg: '#333333',
    date: 'Sep 2022 - Jan 2026',
  },
  {
    title: 'Coding Mentor (Volunteer)',
    company_name: 'Cybertigers',
    icon: cybertigers8075,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Operations Manager',
    company_name: 'Golden Unicorn',
    icon: goldenunicorn,
    iconBg: '#333333',
    date: 'Oct 2019 - Present',
  },
  {
    title: 'Software Engineer Fellow',
    company_name: 'Headstarter AI',
    icon: headstarterai,
    iconBg: '#333333',
    date: 'July 2024 - Sep 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
