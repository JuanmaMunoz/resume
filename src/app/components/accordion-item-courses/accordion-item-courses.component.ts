import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-accordion-item-courses',
  templateUrl: './accordion-item-courses.component.html',
  styleUrls: ['./accordion-item-courses.component.scss'],
})
export class AccordionItemCoursesComponent {
  constructor(public resumeService: ResumeService) {}
}
