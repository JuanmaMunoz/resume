import { Component, Input } from '@angular/core';
import { IDegree } from 'src/app/models/interfaces';

@Component({
    selector: 'app-info-item',
    templateUrl: './info-item.component.html',
    styleUrls: ['./info-item.component.scss'],
    standalone: false
})
export class InfoItemComponent {
  @Input() degree!: IDegree;
}
