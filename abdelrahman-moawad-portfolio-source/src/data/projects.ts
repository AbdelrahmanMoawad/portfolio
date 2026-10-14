export type ProjectAction = {
  label: string;
  href?: string;
};

export type PortfolioProject = {
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  engine: string;
  platforms: string;
  image: string;
  imageAlt: string;
  overview: string;
  techStack: string[];
  mechanics: string[];
  challenges: string;
  actions: ProjectAction[];
};

export const projects: PortfolioProject[] = [
  {
    number: '01',
    title: 'Kitchen Chaos',
    category: '3D KITCHEN GAME / SIMULATION',
    status: 'LEARNING PROJECT',
    description: "A fast-paced 3D kitchen game built while mastering Unity's gameplay architecture, C# events, and state management.",
    engine: 'UNITY',
    platforms: 'PC / WEBGL',
    image: '/assets/projects/kitchen-chaos.webp',
    imageAlt: 'Isometric 3D kitchen from Kitchen Chaos',
    overview: 'A fast-paced 3D kitchen game where players manage, chop, and cook under a tight schedule. Built to showcase robust gameplay logic and optimization.',
    techStack: ['Unity (C#)', 'WebGL', 'Git', 'Post-Processing'],
    mechanics: [
      'Player State Machine (Handles walk, carry, chop seamlessly).',
      'Event-Driven UI (Decoupled UI and gameplay logic using C# Events & Delegates).',
      'Dynamic Cooking System with multi-stage progress bars.',
    ],
    challenges: 'Refactoring the interaction system to decouple the UI was a primary challenge, successfully solved by implementing the Publisher/Subscriber pattern, which drastically improved code maintainability.',
    actions: [
      { label: 'View GitHub Repo', href: 'https://github.com/AbdelrahmanMoawad/KitchenChaos' },
      { label: 'Play Live Demo' },
    ],
  },
  {
    number: '02',
    title: 'The Final Minute',
    category: 'PSYCHOLOGICAL HORROR / SURVIVAL',
    status: 'IN DEVELOPMENT',
    description: 'Discover a three-digit code and activate it within 15 real-time minutes, before the clock reaches 12:00.',
    engine: 'UNITY',
    platforms: 'PC / CONSOLES',
    image: '/assets/projects/the-final-minute.webp',
    imageAlt: 'Dark first-person horror room with a glowing clock',
    overview: 'A tense psychological horror game where players must solve a three-digit code and escape within 15 real-time minutes before the clock strikes 12:00. Built from scratch with immersive psychology-based atmospheric design.',
    techStack: ['Unity (C#)', '3D Sound', 'Dynamic Lighting', 'Git'],
    mechanics: [
      'Custom Rigidbody First-Person Controller for immersive movement.',
      'Real-Time Timer System synchronized with the 15-minute countdown.',
      'Interactive Keypad Puzzle logic.',
      'Dynamic Audio & Lighting triggers to build psychological tension.',
    ],
    challenges: 'Managing real-time countdown physics and event synchronizations without lag was difficult, solved by using optimized timers and C# events for puzzle stages.',
    actions: [],
  },
];
