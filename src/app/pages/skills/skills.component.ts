import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';
import { SkillsLgComponent } from '../../components/skills-lg/skills-lg.component';
import { SkillsSmComponent } from '../../components/skills-sm/skills-sm.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [SkillsLgComponent, SkillsSmComponent],
})
export class SkillsComponent implements OnInit {
  public resumeService = inject(ResumeService);
  public router = inject(Router);

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
