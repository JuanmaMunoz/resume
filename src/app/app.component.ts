import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Language, ModeDark } from './models/enums';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();
  @ViewChild('content') content: ElementRef = {} as ElementRef;
  constructor(
    private translate: TranslateService,
    private resumeService: ResumeService,
  ) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('language') || Language.ENGLISH;
    const modeDark = localStorage.getItem('modeDark') || ModeDark.DARK;
    this.resumeService.modeDark.next(modeDark as ModeDark);
    this.translate.use(lang);
    this.subscription.add(
      this.translate.onLangChange.subscribe((data) => {
        this.getInfo(data.lang as Language);
        localStorage.setItem('language', data.lang);
      }),
    );
    this.subscription.add(
      this.resumeService.modeDark.subscribe((mode: ModeDark) => {
        document.documentElement.setAttribute('data-bs-theme', mode);
        localStorage.setItem('modeDark', mode);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getInfo(lan: Language): void {
    this.resumeService.getInfo(lan);
  }

  private resetScroll() {
    this.content.nativeElement.scrollTop = 0;
  }
}
