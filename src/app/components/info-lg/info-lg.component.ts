import { Component } from '@angular/core';
import { CardUserComponent } from '../card-user/card-user.component';
import { AccordionInfoComponent } from '../accordion-info/accordion-info.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';

@Component({
    selector: 'app-info-lg',
    templateUrl: './info-lg.component.html',
    styleUrls: ['./info-lg.component.scss'],
    imports: [CardUserComponent, AccordionInfoComponent, HobbiesComponent]
})
export class InfoLgComponent {

}
