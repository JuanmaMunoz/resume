import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent {
  @Input() show: boolean = false;
  public menu!: Observable<IMenuButton[]>;

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.menu = this.resumeService.getMenuButtons();
  }
}
