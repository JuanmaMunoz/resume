import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicationItemComponent } from 'src/app/components/publication-item/publication-item.component';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-publications',
  imports: [TranslateModule, PublicationItemComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent implements OnInit {
  public resumeService = inject(ResumeService);
  private router = inject(Router);

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
