import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Language } from 'src/app/models/enums';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit, OnDestroy {
  public id: string = '';
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
