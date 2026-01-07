import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [TranslateModule],
})
export class HobbiesComponent {
  public resumeService = inject(ResumeService);
}
