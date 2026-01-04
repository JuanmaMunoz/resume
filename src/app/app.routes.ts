import { Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InfoComponent } from './pages/info/info.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'publications',
    component: PublicationsComponent,
  },
  { path: '**', redirectTo: 'info' },
];
