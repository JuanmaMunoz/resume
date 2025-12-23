import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    standalone: false
})
export class HobbiesComponent {
  constructor(public resumeService: ResumeService) {}
}
