import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/models/interfaces';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent {
  @Input() experience!: IExperience;
}
