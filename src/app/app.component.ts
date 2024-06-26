import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Language, ModeDark } from './models/enums';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  public subscription = new Subscription();
  public showMenu: boolean = false;
  @ViewChild('content') content: ElementRef = {} as ElementRef;
  @ViewChild('menu') menu: ElementRef = {} as ElementRef;
  // @ViewChild('btnMenu') btnMenu: ElementRef = {} as ElementRef;
  constructor(private translate: TranslateService, private resumeService: ResumeService) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('language') || Language.ENGLISH;
    const modeDark = localStorage.getItem('modeDark') || ModeDark.LIGHT;
    this.resumeService.modeDark.next(modeDark as ModeDark);
    this.translate.use(lang);
    this.subscription.add(
      this.translate.onLangChange.subscribe((data) => {
        this.getInfo(data.lang as Language);
        localStorage.setItem('language', data.lang);
      })
    );
    this.subscription.add(
      this.resumeService.modeDark.subscribe((mode: ModeDark) => {
        document.documentElement.setAttribute('data-bs-theme', mode);
        localStorage.setItem('modeDark', mode);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', (event: any) => {
      if (!this.menu?.nativeElement.contains(event.target)) {
        if (event.target.className.includes('navbar-btn') || event.target.className.includes('bi-list')) {
          this.showMenu = !this.showMenu;
        } else {
          this.showMenu = false;
        }
      } else {
        if (
          event.target.className.includes('menu-button') ||
          event.target.className.includes('form-check') ||
          event.target.className.includes('bi-cup-hot') ||
          event.target.className.includes('bi-hdd-stack') ||
          event.target.className.includes('bi-emoji-sunglasses')
        ) {
          this.showMenu = false;
        }
      }
    });
  }

  private getInfo(lan: Language): void {
    this.resumeService.getInfo(lan);
  }

  public showHideMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) this.resetScroll();
  }

  private resetScroll() {
    this.content.nativeElement.scrollTop = 0;
  }
}
