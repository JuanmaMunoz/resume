import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, take } from 'rxjs';
import { Language } from 'src/app/models/enums';

const NEW_WEB_URL = 'https://jmmg-portfolio.vercel.app';
const OPEN_DELAY = 5000;

@Component({
  selector: 'app-new-web-dialog',
  templateUrl: './new-web-dialog.component.html',
  styleUrls: ['./new-web-dialog.component.scss'],
  imports: [TranslateModule],
})
export class NewWebDialogComponent {
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement> = {} as ElementRef<HTMLDialogElement>;

  public url = signal(`${NEW_WEB_URL}/en`);

  private translate = inject(TranslateService);

  private subscription = this.translate.onLangChange
    .pipe(takeUntilDestroyed())
    .subscribe((data) => this.url.set(`${NEW_WEB_URL}/${data.lang === Language.SPANISH ? 'es' : 'en'}`));

  // Solo se abre una vez por carga, tras cargar las traducciones
  private openSubscription = this.translate.onLangChange
    .pipe(take(1), delay(OPEN_DELAY), takeUntilDestroyed())
    .subscribe(() => this.dialog.nativeElement.showModal());

  public close(): void {
    this.dialog.nativeElement.close();
  }
}
