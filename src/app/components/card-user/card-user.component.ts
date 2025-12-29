import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { showAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  animations: [showAnimation()],
  standalone: false,
})
export class CardUserComponent {
  constructor(public resumeService: ResumeService) {}
}
