import { Component } from '@angular/core';
import { ShineDirective } from '../../utils/shineDirective';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    imports: [ShineDirective],
})
export class TitleComponent {}
