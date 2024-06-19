import { Component } from '@angular/core';

@Component({
  selector: 'app-mode-dark',
  templateUrl: './mode-dark.component.html',
  styleUrls: ['./mode-dark.component.scss'],
})
export class ModeDarkComponent {
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
