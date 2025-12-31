import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';
import { ProfesionalGrowthComponent } from '../profesional-growth/profesional-growth.component';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-skills-sm',
  templateUrl: './skills-sm.component.html',
  styleUrls: ['./skills-sm.component.scss'],
  imports: [SkillItemComponent, ProfesionalGrowthComponent, TranslateModule, SpinnerComponent],
})
export class SkillsSmComponent {
  constructor(public resumeService: ResumeService) {}
}
