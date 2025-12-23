import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, repeat } from 'rxjs';
import { ISkill } from 'src/app/models/interfaces';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    standalone: false
})
export class SkillItemComponent implements OnInit, OnDestroy {
  @Input() skill!: ISkill;
  private subscription = new Subscription();
  public percent: number = 0;
  ngOnInit(): void {
    this.fillBar();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fillBar(): void {
    let initialValue = 1;
    this.subscription.add(
      of(initialValue)
        .pipe(repeat({ count: 3, delay: 1 }))
        .subscribe((data: number) => {
          const percent = initialValue++ * 33;
          percent < this.skill.coverage ? (this.percent = percent) : (this.percent = this.skill.coverage);
        })
    );
  }
}
