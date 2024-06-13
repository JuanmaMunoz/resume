import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IInfoUser } from './models/interfaces';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resume';
  public subscription = new Subscription();
  constructor(private translate: TranslateService, private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.translate.use('es_ES');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    this.getInfo();
  }

  private getInfo(): void {
    this.subscription.add(
      this.resumeService.getInfo().subscribe({
        next: (data: IInfoUser) => this.resumeService.infoUser.next(data),
        error: (e: HttpErrorResponse) => {},
      })
    );
  }
}
