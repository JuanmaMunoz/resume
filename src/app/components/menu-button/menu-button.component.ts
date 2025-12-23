import { Component, Input } from '@angular/core';
import { IMenuButton } from 'src/app/models/interfaces';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss'],
    standalone: false
})
export class MenuButtonComponent {
  @Input() menuButton!: IMenuButton;
}
