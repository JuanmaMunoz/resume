import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IInfoUser } from './models/interfaces';
import { ResumeService } from './services/resume.service';
import { showHideStatus } from './utils/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showHideStatus],
})
export class AppComponent implements OnInit, AfterViewInit {
  public subscription = new Subscription();
  public showMenu: boolean = false;
  @ViewChild('content') content: ElementRef = {} as ElementRef;
  @ViewChild('menu') menu: ElementRef = {} as ElementRef;
  @ViewChild('btnMenu') btnMenu: ElementRef = {} as ElementRef;
  constructor(private translate: TranslateService, private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.translate.use('es_ES');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    this.getInfo();
  }

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', (event: any) => {
      if (!this.menu?.nativeElement.contains(event.target) && !this.btnMenu?.nativeElement.contains(event.target)) {
        this.showMenu = false;
      } else {
        if (event.target.className.includes('menu-button') || event.target.className.includes('form-check')) {
          this.showMenu = false;
        }
      }
    });
  }

  private getInfo(): void {
    this.subscription.add(
      this.resumeService.getInfo().subscribe({
        next: (data: IInfoUser) => this.resumeService.infoUser.next(data),
        error: (e: HttpErrorResponse) => {},
      })
    );
  }

  public showHideMenu() {
    if (this.showMenu) this.resetScroll();
    this.showMenu = !this.showMenu;
  }

  private resetScroll() {
    this.content.nativeElement.scrollTop = 0;
  }
}
