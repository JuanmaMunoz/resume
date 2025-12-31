import { Component, ElementRef, ViewChild } from '@angular/core';
import { Float } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';
import { showAndSlide } from 'src/app/utils/animations';
import { ShineDirective } from '../../utils/shineDirective';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [showAndSlide()],
  imports: [ShineDirective, MenuButtonComponent, OptionsComponent],
})
export class NavbarComponent {
  @ViewChild('navbarButton') navbarButton: ElementRef = {} as ElementRef;
  public show: boolean = false;
  public enumFloat = Float;

  constructor(public resumeService: ResumeService) {}

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
