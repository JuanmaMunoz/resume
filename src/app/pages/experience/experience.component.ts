import { Component, inject, OnInit } from '@angular/core';
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
  public resumeService = inject(ResumeService);
  private router = inject(Router);

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
