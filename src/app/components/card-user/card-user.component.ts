import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';
import { showAnimation } from 'src/app/utils/animations';
import { FullRemoteComponent } from '../full-remote/full-remote.component';
import { OtherDataComponent } from '../other-data/other-data.component';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  animations: [showAnimation()],
  imports: [UserDataComponent, OtherDataComponent, FullRemoteComponent, TranslateModule],
})
export class CardUserComponent {
  constructor(public resumeService: ResumeService) {}
}
