import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Float } from 'src/app/models/enums';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';
import { showAndSlide } from 'src/app/utils/animations';
import { ShineDirective } from '../../utils/shineDirective';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { OptionsComponent } from '../options/options.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [showAndSlide()],
    imports: [
        ShineDirective,
        MenuButtonComponent,
        OptionsComponent,
        AsyncPipe,
    ],
})
export class NavbarComponent {
  @ViewChild('navbarButton') navbarButton: ElementRef = {} as ElementRef;
  public show: boolean = false;
  public menu!: Observable<IMenuButton[]>;
  public enumFloat = Float;

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.menu = this.resumeService.getMenuButtons();
  }

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', (event: MouseEvent) => {
      if (this.navbarButton?.nativeElement?.contains(event.target)) {
        this.show = !this.show;
      } else {
        this.show = false;
      }
    });
  }
}
