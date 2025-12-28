import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  standalone: false,
})
export class OptionsComponent {
  @Input() id!: string;
}
