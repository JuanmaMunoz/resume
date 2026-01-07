import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';
import { InfoLgComponent } from '../../components/info-lg/info-lg.component';
import { InfoSmComponent } from '../../components/info-sm/info-sm.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  imports: [InfoLgComponent, InfoSmComponent],
})
export class InfoComponent implements OnInit {
  public resumeService = inject(ResumeService);
  private router = inject(Router);

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
