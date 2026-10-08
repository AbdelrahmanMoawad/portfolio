export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { label: 'PROGRAMMING', skills: ['C++', 'C#', 'OOP', 'Data Structures', 'Gameplay Programming'] },
  { label: 'ENGINE & TOOLS', skills: ['Unity', 'Git', 'GitHub', 'Unity Animator', 'Unity UI'] },
  { label: 'GAME FORMATS', skills: ['2D Game Development', '3D Game Development'] },
];

export type Service = { number: string; title: string; description: string; icon: 'unity' | 'gameplay' | 'script' | 'mechanics' | 'formats' | 'prototype' | 'ui' };

export const services: Service[] = [
  { number: '01', title: 'Unity Game Development', description: 'Build gameplay experiences in Unity from early prototype through implementation.', icon: 'unity' },
  { number: '02', title: 'Gameplay Programming', description: 'Implement player controls, interactions, and gameplay flow.', icon: 'gameplay' },
  { number: '03', title: 'C# Scripting', description: 'Write organized scripts that connect gameplay systems and interface behavior.', icon: 'script' },
  { number: '04', title: 'Game Mechanics', description: 'Shape and implement player actions, rules, and in-game feedback.', icon: 'mechanics' },
  { number: '05', title: '2D / 3D Game Development', description: 'Develop interactive game experiences across 2D and 3D formats.', icon: 'formats' },
  { number: '06', title: 'Game Prototyping', description: 'Turn a gameplay idea into a playable early build for evaluation.', icon: 'prototype' },
  { number: '07', title: 'UI Implementation', description: 'Implement in-game interface screens and feedback with Unity UI.', icon: 'ui' },
];
