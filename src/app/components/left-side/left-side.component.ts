import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuButton } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
  standalone: false,
})
export class LeftSideComponent implements OnInit {
  public menu!: Observable<IMenuButton[]>;

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.menu = this.resumeService.getMenuButtons();
  }
}
