import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IInfoUser, IMenuButton } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  public infoUser: BehaviorSubject<IInfoUser> = new BehaviorSubject({} as IInfoUser);
  public currentUrl: string = '/info';
  constructor(private http: HttpClient) {}

  public getInfo(): Observable<IInfoUser> {
    const lang = localStorage.getItem('language');
    const url = lang === 'en_EN' ? `/assets/data/info_en.json` : `/assets/data/info_es.json`;
    return this.http.get<IInfoUser>(url);
  }

  public getMenuButtons(): Observable<IMenuButton[]> {
    const url = `/assets/data/menu.json`;
    return this.http.get<IMenuButton[]>(url);
  }
}
