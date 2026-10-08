export type PortfolioProject = {
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  detailLabel: string;
  detail: string;
  visual: 'kitchen' | 'final-minute';
  inquirySubject: string;
};

export const projects: PortfolioProject[] = [
  {
    number: '01',
    title: 'Kitchen Chaos',
    category: 'LEARNING PROJECT',
    status: 'CURRICULUM BUILD',
    description: "A 3D kitchen game built while following Code Monkey's Unity tutorial and learning curriculum.",
    detailLabel: 'ENGINE',
    detail: 'UNITY',
    visual: 'kitchen',
    inquirySubject: 'Kitchen%20Chaos',
  },
  {
    number: '02',
    title: 'The Final Minute',
    category: 'PSYCHOLOGICAL HORROR / SURVIVAL',
    status: 'IN DEVELOPMENT',
    description: 'Concept: discover a three-digit code and activate it within 15 real-time minutes, before the clock reaches 12:00.',
    detailLabel: 'PLATFORM',
    detail: 'PC / CONSOLES',
    visual: 'final-minute',
    inquirySubject: 'The%20Final%20Minute',
  },
];
