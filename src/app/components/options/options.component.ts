import { Component, Input } from '@angular/core';
import { Float } from 'src/app/models/enums';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  standalone: false,
})
export class OptionsComponent {
  @Input() id!: string;
  @Input() float: Float = Float.END;
}
