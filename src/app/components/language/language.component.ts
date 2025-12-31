import { Component, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/models/enums';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  imports: [FormsModule, TranslateModule],
})
export class LanguageComponent {
  @Input() id: string = '';
  public language: Language = Language.ENGLISH;
  public languageEnum = Language;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(takeUntilDestroyed()).subscribe((data) => (this.language = data.lang as Language));
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
  }
}
