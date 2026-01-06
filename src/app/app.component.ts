import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OptionsComponent } from './components/options/options.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Language, ModeDark } from './models/enums';
import { ResumeService } from './services/resume.service';
import { showApp } from './utils/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showApp(500)],
  imports: [OptionsComponent, LeftSideComponent, NavbarComponent, RouterOutlet, SpinnerComponent],
})
export class AppComponent {
  @ViewChild('content') content: ElementRef = {} as ElementRef;
  constructor(
    private translate: TranslateService,
    private resumeService: ResumeService,
  ) {
    this.translate.onLangChange.pipe(takeUntilDestroyed()).subscribe((data) => {
      this.getInfo(data.lang as Language);
      this.resumeService.getMenuButtons();
      localStorage.setItem('language', data.lang);
    });

    effect(() => {
      document.documentElement.setAttribute('data-bs-theme', this.resumeService.modeDark());
      localStorage.setItem('modeDark', this.resumeService.modeDark());
    });
  }

  ngOnInit(): void {
    const lang = localStorage.getItem('language') || Language.ENGLISH;
    const modeDark = localStorage.getItem('modeDark') || ModeDark.DARK;
    this.resumeService.modeDark.set(modeDark as ModeDark);
    this.translate.use(lang);
  }

  private getInfo(lan: Language): void {
    this.resumeService.getInfo(lan);
  }
}
