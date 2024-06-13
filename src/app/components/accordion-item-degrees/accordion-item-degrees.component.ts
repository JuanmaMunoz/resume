import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-accordion-item-degrees',
  templateUrl: './accordion-item-degrees.component.html',
  styleUrls: ['./accordion-item-degrees.component.scss'],
})
export class AccordionItemDegreesComponent {
  constructor(public resumeService: ResumeService) {}
}
