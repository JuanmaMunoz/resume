import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { entranceAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [entranceAnimation()],
  standalone: false,
})
export class PhotoComponent {
  constructor(public resumeService: ResumeService) {}
}
