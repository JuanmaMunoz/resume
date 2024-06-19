import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-item-courses',
  templateUrl: './item-courses.component.html',
  styleUrls: ['./item-courses.component.scss'],
})
export class ItemCoursesComponent {
  constructor(public resumeService: ResumeService) {}
}
