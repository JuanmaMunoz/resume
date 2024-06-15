import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/models/interfaces';

@Component({
  selector: 'app-experience-menu-item',
  templateUrl: './experience-menu-item.component.html',
  styleUrls: ['./experience-menu-item.component.scss'],
})
export class ExperienceMenuItemComponent {
  @Input() experience!: IExperience;

  public goToExperience(company: string): void {
    const element = document.getElementById(company);
    element!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
