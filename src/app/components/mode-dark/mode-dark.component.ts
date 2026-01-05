import { Component, effect, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModeDark } from 'src/app/models/enums';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-mode-dark',
  templateUrl: './mode-dark.component.html',
  styleUrls: ['./mode-dark.component.scss'],
  imports: [FormsModule],
})
export class ModeDarkComponent {
  @Input() id: string = '';
  public modeDark: boolean = false;
  public modeDarkEnum = ModeDark;
  public constructor(private resumeService: ResumeService) {
    effect(() => {
      this.modeDark = this.resumeService.modeDark() === ModeDark.DARK ? true : false;
    });
  }

  public changeModeDark() {
    if (this.modeDark) {
      this.resumeService.modeDark.set(this.modeDarkEnum.DARK);
    } else {
      this.resumeService.modeDark.set(this.modeDarkEnum.LIGHT);
    }
  }
}
