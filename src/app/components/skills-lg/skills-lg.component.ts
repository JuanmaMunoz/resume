import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeSkill } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';
import { ProfesionalGrowthComponent } from '../profesional-growth/profesional-growth.component';
import { SkillItemComponent } from '../skill-item/skill-item.component';

@Component({
  selector: 'app-skills-lg',
  templateUrl: './skills-lg.component.html',
  styleUrls: ['./skills-lg.component.scss'],
  imports: [SkillItemComponent, ProfesionalGrowthComponent, TranslateModule],
})
export class SkillsLgComponent {
  public enumTypeSkill = TypeSkill;
  public typeSkill: TypeSkill = TypeSkill.TECHNICAL;
  constructor(public resumeService: ResumeService) {}

  public changeTypeSkills(typeSkill: TypeSkill) {
    this.typeSkill = typeSkill;
  }
}
