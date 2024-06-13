import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeSkill } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(public resumeService: ResumeService, private router: Router) {}
  public enumTypeSkill = TypeSkill;
  public typeSkill: TypeSkill = TypeSkill.TECHNICAL;

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }

  public changeTypeSkills(typeSkill: TypeSkill) {
    this.typeSkill = typeSkill;
  }
}
