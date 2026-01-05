import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { entranceAnimation } from 'src/app/utils/animations';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [entranceAnimation()],
  imports: [UserDataComponent],
})
export class PhotoComponent {
  constructor(public resumeService: ResumeService) {}
}
