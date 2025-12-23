import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    standalone: false
})
export class InfoComponent implements OnInit {
  constructor(private resumeService: ResumeService, private router: Router) {}

  ngOnInit(): void {
    this.resumeService.currentUrl = this.router.url;
  }
}
