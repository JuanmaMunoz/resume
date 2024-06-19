import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() actionShowMenu: EventEmitter<null> = new EventEmitter();
  public showHideMenu(): void {
    this.actionShowMenu.emit();
  }
}
