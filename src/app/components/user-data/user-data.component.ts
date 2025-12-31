import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-user-data',
    templateUrl: './user-data.component.html',
    styleUrl: './user-data.component.scss',
    imports: [AsyncPipe],
})
export class UserDataComponent {
  constructor(public resumeService: ResumeService) {}
}
