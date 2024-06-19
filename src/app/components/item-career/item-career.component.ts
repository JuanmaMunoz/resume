import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-item-career',
  templateUrl: './item-career.component.html',
  styleUrls: ['./item-career.component.scss'],
})
export class ItemCareerComponent {
  constructor(public resumeService: ResumeService) {}
}
