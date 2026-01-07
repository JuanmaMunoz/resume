import { Component, inject } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrl: './other-data.component.scss',
  imports: [],
})
export class OtherDataComponent {
  public resumeService = inject(ResumeService);
}
