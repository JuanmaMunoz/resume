import { Component, Input } from '@angular/core';
import { IGoal } from 'src/app/models/interfaces';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
})
export class GoalItemComponent {
  @Input() goal!: IGoal;
}
