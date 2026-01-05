import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';
import { ExperienceMenuItemComponent } from '../../components/experience-menu-item/experience-menu-item.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [ExperienceMenuItemComponent, ExperienceItemComponent, TranslateModule],
})
export class ExperienceComponent implements OnInit {
  constructor(
    public resumeService: ResumeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
