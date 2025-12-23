import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {
  constructor(public resumeService: ResumeService) {}
}
