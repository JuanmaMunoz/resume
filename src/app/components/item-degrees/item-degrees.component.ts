import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-item-degrees',
  templateUrl: './item-degrees.component.html',
  styleUrls: ['./item-degrees.component.scss'],
})
export class ItemDegreesComponent {
  constructor(public resumeService: ResumeService) {}
}
