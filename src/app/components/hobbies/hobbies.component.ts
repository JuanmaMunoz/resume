import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    imports: [AsyncPipe, TranslateModule]
})
export class HobbiesComponent {
  constructor(public resumeService: ResumeService) {}
}
