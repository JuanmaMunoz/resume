import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-menu-sm',
  templateUrl: './menu-sm.component.html',
  styleUrls: ['./menu-sm.component.scss'],
})
export class MenuSmComponent {
  private subscription = new Subscription();
  public menuButtons: IMenuButton[] = [];
  constructor(public resumeService: ResumeService) {}
  ngOnInit(): void {
    this.subscription.add(
      this.resumeService.getMenuButtons().subscribe({
        next: (data: IMenuButton[]) => {
          this.menuButtons = data;
        },
        error: (e: HttpErrorResponse) => {},
      })
    );
  }
}
