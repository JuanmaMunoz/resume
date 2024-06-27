import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language, ModeDark } from '../models/enums';
import { IInfoUser, IMenuButton } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  public infoUser: BehaviorSubject<IInfoUser> = new BehaviorSubject({
    name: 'Juan Manuel Muñoz González',
    age: 40,
    city: 'Torre del Mar (Málaga)',
    email: 'jmmugoz@gmail.com',
    position: 'Front-End Architect',
  });
  public modeDark: BehaviorSubject<ModeDark> = new BehaviorSubject(ModeDark.LIGHT as ModeDark);
  public currentUrl: string = '/info';
  constructor(private http: HttpClient) {}

  public getInfo(lan: Language): void {
    //const url = lang === 'en_EN' ? `/assets/data/info_en.json` : `/assets/data/info_es.json`;
    const url = `/assets/data/info_es.json`;
    this.http.get<IInfoUser>(url).subscribe((data: IInfoUser) => this.infoUser.next(data));
  }

  public getMenuButtons(): Observable<IMenuButton[]> {
    const url = `/assets/data/menu.json`;
    return this.http.get<IMenuButton[]>(url);
  }
}
