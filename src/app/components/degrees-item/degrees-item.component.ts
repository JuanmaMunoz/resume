import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-degrees-item',
  templateUrl: './degrees-item.component.html',
  styleUrls: ['./degrees-item.component.scss'],
})
export class DegreesItemComponent {
  constructor(public resumeService: ResumeService) {}
}
