import { Component, Input } from '@angular/core';
import { Float } from 'src/app/models/enums';
import { LanguageComponent } from '../language/language.component';
import { ModeDarkComponent } from '../mode-dark/mode-dark.component';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
    imports: [LanguageComponent, ModeDarkComponent],
})
export class OptionsComponent {
  @Input() id!: string;
  @Input() float: Float = Float.END;
}
