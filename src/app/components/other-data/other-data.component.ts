import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-other-data',
    templateUrl: './other-data.component.html',
    styleUrl: './other-data.component.scss',
    imports: [AsyncPipe],
})
export class OtherDataComponent {
  constructor(public resumeService: ResumeService) {}
}
