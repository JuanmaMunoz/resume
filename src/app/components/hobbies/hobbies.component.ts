import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [TranslateModule],
})
export class HobbiesComponent {
  constructor(public resumeService: ResumeService) {}
}
