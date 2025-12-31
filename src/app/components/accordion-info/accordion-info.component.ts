import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeAccordionItem } from 'src/app/models/enums';
import { IAccordionItem } from 'src/app/models/interfaces';
import { ResumeService } from 'src/app/services/resume.service';
import { InfoItemComponent } from '../info-item/info-item.component';

@Component({
  selector: 'app-accordion-info',
  templateUrl: './accordion-info.component.html',
  styleUrls: ['./accordion-info.component.scss'],
  imports: [InfoItemComponent, TranslateModule],
})
export class AccordionInfoComponent {
  public idAccordion = 'accordionInfo';
  public typeItem = TypeAccordionItem;
  public accordionItems: IAccordionItem[] = [
    { type: TypeAccordionItem.CAREER, icon: 'bi-boxes' },
    { type: TypeAccordionItem.DEGREES, icon: 'bi-mortarboard' },
    { type: TypeAccordionItem.COURSES, icon: 'bi-award' },
  ];
  constructor(public resumeService: ResumeService) {}
}
