import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-skills-sm',
    templateUrl: './skills-sm.component.html',
    styleUrls: ['./skills-sm.component.scss'],
    standalone: false
})
export class SkillsSmComponent {
  constructor(public resumeService: ResumeService) {}
}
