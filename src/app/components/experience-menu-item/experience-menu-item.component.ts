import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/models/interfaces';
import { showAnimation } from 'src/app/utils/animations';
import { environmment } from '../../../environments/environment';

@Component({
  selector: 'app-experience-menu-item',
  templateUrl: './experience-menu-item.component.html',
  styleUrls: ['./experience-menu-item.component.scss'],
  animations: [showAnimation()],
  standalone: false,
})
export class ExperienceMenuItemComponent {
  @Input() experience!: IExperience;
  public environment = environmment;

  public goToExperience(company: string): void {
    const element = document.getElementById(company);
    element!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
