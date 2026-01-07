import { Component, inject } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { entrance } from 'src/app/utils/animations';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [entrance()],
  imports: [UserDataComponent],
})
export class PhotoComponent {
  public resumeService = inject(ResumeService);
}
