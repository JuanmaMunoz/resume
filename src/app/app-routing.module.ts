import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InfoComponent } from './pages/info/info.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
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
  { path: '**', redirectTo: 'info' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
