import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { ProfesionalGrowthComponent } from '../profesional-growth/profesional-growth.component';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-skills-sm',
    templateUrl: './skills-sm.component.html',
    styleUrls: ['./skills-sm.component.scss'],
    imports: [SkillItemComponent, ProfesionalGrowthComponent, AsyncPipe, TranslateModule]
})
export class SkillsSmComponent {
  constructor(public resumeService: ResumeService) {}
}
