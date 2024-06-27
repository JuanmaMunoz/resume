import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeDark } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-mode-dark',
  templateUrl: './mode-dark.component.html',
  styleUrls: ['./mode-dark.component.scss'],
})
export class ModeDarkComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  public modeDark: boolean = false;
  public modeDarkEnum = ModeDark;
  public subscription = new Subscription();
  public constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.resumeService.modeDark.subscribe((mode: ModeDark) => {
        this.modeDark = mode === ModeDark.DARK ? true : false;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changeModeDark() {
    if (this.modeDark) {
      this.resumeService.modeDark.next(this.modeDarkEnum.DARK);
    } else {
      this.resumeService.modeDark.next(this.modeDarkEnum.LIGHT);
    }
  }
}
