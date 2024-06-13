import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-accordion-item-career',
  templateUrl: './accordion-item-career.component.html',
  styleUrls: ['./accordion-item-career.component.scss'],
})
export class AccordionItemCareerComponent {
  constructor(public resumeService: ResumeService) {}
}
