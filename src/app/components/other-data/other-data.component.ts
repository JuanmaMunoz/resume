import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrl: './other-data.component.scss',
  standalone: false,
})
export class OtherDataComponent {
  constructor(public resumeService: ResumeService) {}
}
