import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss'],
})
export class CareerItemComponent {
  constructor(public resumeService: ResumeService) {}
}
