import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info.component').then((m) => m.InfoComponent),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then((m) => m.ExperienceComponent),
  },
  {
    path: 'publications',
    loadComponent: () => import('./pages/publications/publications.component').then((m) => m.PublicationsComponent),
  },
  { path: '**', redirectTo: 'info' },
];
