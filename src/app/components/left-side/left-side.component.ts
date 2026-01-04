import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { PhotoComponent } from '../photo/photo.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
  imports: [PhotoComponent, TitleComponent, MenuButtonComponent],
})
export class LeftSideComponent {
  constructor(public resumeService: ResumeService) {}
}
