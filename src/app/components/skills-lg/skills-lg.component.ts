import { Component } from '@angular/core';
import { TypeSkill } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { ProfesionalGrowthComponent } from '../profesional-growth/profesional-growth.component';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-skills-lg',
    templateUrl: './skills-lg.component.html',
    styleUrls: ['./skills-lg.component.scss'],
    imports: [SkillItemComponent, ProfesionalGrowthComponent, AsyncPipe, TranslateModule]
})
export class SkillsLgComponent {
  public enumTypeSkill = TypeSkill;
  public typeSkill: TypeSkill = TypeSkill.TECHNICAL;
  constructor(public resumeService: ResumeService) {}

  public changeTypeSkills(typeSkill: TypeSkill) {
    this.typeSkill = typeSkill;
  }
}
