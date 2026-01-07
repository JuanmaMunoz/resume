import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environmment } from '../../environments/environment';
import { Language, ModeDark } from '../models/enums';
import { IInfoUser, IMenuButton } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  public infoUser: WritableSignal<IInfoUser | null> = signal(null);
  public modeDark: WritableSignal<ModeDark> = signal(ModeDark.LIGHT);
  public menuButtons: WritableSignal<IMenuButton[]> = signal([]);
  public currentUrl = '/info';

  private http = inject(HttpClient);

  public getInfo(lan: Language): void {
    const url = lan === Language.ENGLISH ? `${environmment.url}/data/info_en.json` : `${environmment.url}/data/info_es.json`;
    this.http.get<IInfoUser>(url).subscribe((data: IInfoUser) => this.infoUser.set(data));
  }

  public getMenuButtons(): void {
    const url = `${environmment.url}/data/menu.json`;
    this.http.get<IMenuButton[]>(url).subscribe((data: IMenuButton[]) => this.menuButtons.set(data));
  }
}
