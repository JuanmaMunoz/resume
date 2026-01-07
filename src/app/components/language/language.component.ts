import { Component, inject, Input, OnInit } from '@angular/core';
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
export class LanguageComponent implements OnInit {
  @Input() id = '';
  public language: Language = Language.ENGLISH;
  public languageEnum = Language;

  public translate = inject(TranslateService);

  private subscription = this.translate.onLangChange
    .pipe(takeUntilDestroyed())
    .subscribe((data) => (this.language = data.lang as Language));

  ngOnInit(): void {
    this.language = (localStorage.getItem('language') as Language) || Language.ENGLISH;
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
  }
}
