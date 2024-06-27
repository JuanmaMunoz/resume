import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, of, repeat } from 'rxjs';
import { ISkill } from 'src/app/models/interfaces';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
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
    let count = 1;
    this.subscription.add(
      of(count)
        .pipe(
          repeat({ count: this.skill.coverage, delay: 1 }),
          map((data: number) => (data = count++))
        )
        .subscribe((data: number) => {
          this.percent = data;
        })
    );
  }
}
