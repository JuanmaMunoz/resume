import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Language } from 'src/app/models/enums';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
    imports: [FormsModule, TranslateModule]
})
export class LanguageComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  public language: Language = Language.ENGLISH;
  public languageEnum = Language;
  private subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subscription.add(this.translate.onLangChange.subscribe((data) => (this.language = data.lang as Language)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
  }
}
