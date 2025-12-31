import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeService } from 'src/app/services/resume.service';
import { InfoItemComponent } from '../info-item/info-item.component';
import { OtherDataComponent } from '../other-data/other-data.component';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-info-sm',
  templateUrl: './info-sm.component.html',
  styleUrls: ['./info-sm.component.scss'],
  imports: [PhotoComponent, OtherDataComponent, InfoItemComponent, TranslateModule],
})
export class InfoSmComponent {
  constructor(public resumeService: ResumeService) {}
}
