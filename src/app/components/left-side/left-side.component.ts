import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';
import { PhotoComponent } from '../photo/photo.component';
import { TitleComponent } from '../title/title.component';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-left-side',
    templateUrl: './left-side.component.html',
    styleUrls: ['./left-side.component.scss'],
    imports: [
        PhotoComponent,
        TitleComponent,
        MenuButtonComponent,
        AsyncPipe,
    ],
})
export class LeftSideComponent implements OnInit {
  public menu!: Observable<IMenuButton[]>;

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.menu = this.resumeService.getMenuButtons();
  }
}
