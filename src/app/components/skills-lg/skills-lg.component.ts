import { Component } from '@angular/core';
import { TypeSkill } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-skills-lg',
    templateUrl: './skills-lg.component.html',
    styleUrls: ['./skills-lg.component.scss'],
    standalone: false
})
export class SkillsLgComponent {
  public enumTypeSkill = TypeSkill;
  public typeSkill: TypeSkill = TypeSkill.TECHNICAL;
  constructor(public resumeService: ResumeService) {}

  public changeTypeSkills(typeSkill: TypeSkill) {
    this.typeSkill = typeSkill;
  }
}
