import { Component, inject } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
  imports: [],
})
export class UserDataComponent {
  public resumeService = inject(ResumeService);
}
