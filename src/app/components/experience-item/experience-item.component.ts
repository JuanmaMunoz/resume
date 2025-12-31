import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/models/interfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    imports: [TranslateModule]
})
export class ExperienceItemComponent {
  @Input() experience!: IExperience;
}
