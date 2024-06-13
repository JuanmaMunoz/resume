import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-card-degrees',
  templateUrl: './card-degrees.component.html',
  styleUrls: ['./card-degrees.component.scss'],
})
export class CardDegreesComponent {
  constructor(public resumeService: ResumeService) {}
}
