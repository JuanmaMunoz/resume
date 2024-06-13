import { Component, OnInit } from '@angular/core';
import { TypeAccordionItem } from 'src/app/models/enums';
import { IAccordionItem } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-accordion-info',
  templateUrl: './accordion-info.component.html',
  styleUrls: ['./accordion-info.component.scss'],
})
export class AccordionInfoComponent implements OnInit {
  public idAccordion = 'accordionInfo';
  public typeItem = TypeAccordionItem;
  public accordionItems: IAccordionItem[] = [
    { type: TypeAccordionItem.CAREER, icon: 'bi-boxes' },
    { type: TypeAccordionItem.DEGREES, icon: 'bi-mortarboard' },
    { type: TypeAccordionItem.COURSES, icon: 'bi-award' },
  ];

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {}
}
