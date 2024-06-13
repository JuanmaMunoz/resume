import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public urlBackGround: string = 'assets/images/headerCode.jpg';
  public modeDark: boolean = true;

  public changeModeDark() {
    this.modeDark = !this.modeDark;
    if (this.modeDark) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
}
