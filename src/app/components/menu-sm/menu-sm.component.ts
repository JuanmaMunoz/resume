import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
    selector: 'app-menu-sm',
    templateUrl: './menu-sm.component.html',
    styleUrls: ['./menu-sm.component.scss'],
    standalone: false
})
export class MenuSmComponent {
  @Input() show: boolean = false;
  public menu!: Observable<IMenuButton[]>;

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.menu = this.resumeService.getMenuButtons();
  }
}
