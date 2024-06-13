import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private subscription = new Subscription();
  public currentUrl: string = '';
  constructor(public resumeService: ResumeService, private router: Router) {}
  public menuButtons: IMenuButton[] = [];

  ngOnInit(): void {
    console.log(this.router.url);
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
