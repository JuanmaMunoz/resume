import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';
import { ExperienceMenuItemComponent } from '../../components/experience-menu-item/experience-menu-item.component';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [ExperienceMenuItemComponent, ExperienceItemComponent, AsyncPipe, TranslateModule]
})
export class ExperienceComponent implements OnInit {
  constructor(public resumeService: ResumeService, private router: Router) {}

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
