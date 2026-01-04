import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval, map, scan, takeWhile } from 'rxjs';
import { ISkill } from 'src/app/models/interfaces';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    imports: [AsyncPipe],
})
export class SkillItemComponent implements OnInit {
  @Input() skill!: ISkill;
  public percent$!: Observable<number>;
  ngOnInit(): void {
    this.fillBar();
  }

  private fillBar(): void {
    this.percent$ = interval(10).pipe(
      scan((acc) => acc + 10, 0),
      map((value) => Math.min(value, this.skill.coverage)),
      takeWhile((value) => value < this.skill.coverage, true),
    );
  }
}
