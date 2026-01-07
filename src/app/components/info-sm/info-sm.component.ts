import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';
import { GoalItemComponent } from '../goal-item/goal-item.component';
import { InfoItemComponent } from '../info-item/info-item.component';
import { OtherDataComponent } from '../other-data/other-data.component';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-info-sm',
  templateUrl: './info-sm.component.html',
  styleUrls: ['./info-sm.component.scss'],
  imports: [PhotoComponent, OtherDataComponent, InfoItemComponent, TranslateModule, GoalItemComponent],
})
export class InfoSmComponent {
  public resumeService = inject(ResumeService);
}
