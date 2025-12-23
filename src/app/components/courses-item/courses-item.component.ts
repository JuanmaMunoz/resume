import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-courses-item',
    templateUrl: './courses-item.component.html',
    styleUrls: ['./courses-item.component.scss'],
    standalone: false
})
export class CoursesItemComponent {
  constructor(public resumeService: ResumeService) {}
}
