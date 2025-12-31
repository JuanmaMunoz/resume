import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { PhotoComponent } from '../photo/photo.component';
import { OtherDataComponent } from '../other-data/other-data.component';
import { InfoItemComponent } from '../info-item/info-item.component';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-info-sm',
    templateUrl: './info-sm.component.html',
    styleUrls: ['./info-sm.component.scss'],
    imports: [
        PhotoComponent,
        OtherDataComponent,
        InfoItemComponent,
        AsyncPipe,
        TranslateModule,
    ],
})
export class InfoSmComponent {
  constructor(public resumeService: ResumeService) {}
}
