import { Component, Input } from '@angular/core';
import { IMenuButton } from 'src/app/models/interfaces';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss'],
    imports: [RouterLinkActive, RouterLink, TranslateModule]
})
export class MenuButtonComponent {
  @Input() menuButton!: IMenuButton;
}
