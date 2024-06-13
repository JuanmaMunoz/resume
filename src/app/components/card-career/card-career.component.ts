import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-card-career',
  templateUrl: './card-career.component.html',
  styleUrls: ['./card-career.component.scss'],
})
export class CardCareerComponent {
  constructor(public resumeService: ResumeService) {}
}
