import { Component, Input } from '@angular/core';
import { IPublication } from 'src/app/models/interfaces';
import { showAnimation } from 'src/app/utils/animations';
import { environmment } from 'src/environments/environment';
import { SpinnerComponent } from './../spinner/spinner.component';

@Component({
  selector: 'app-publication-item',
  imports: [SpinnerComponent],
  templateUrl: './publication-item.component.html',
  styleUrl: './publication-item.component.scss',
  animations: [showAnimation()],
})
export class PublicationItemComponent {
  @Input() publication!: IPublication;
  public environment = environmment;
}
