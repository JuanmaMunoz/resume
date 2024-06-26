import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionInfoComponent } from './components/accordion-info/accordion-info.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ExperienceMenuItemComponent } from './components/experience-menu-item/experience-menu-item.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoItemComponent } from './components/info-item/info-item.component';

import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { InfoSmComponent } from './components/info-sm/info-sm.component';
import { ItemCareerComponent } from './components/item-career/item-career.component';
import { ItemCoursesComponent } from './components/item-courses/item-courses.component';
import { ItemDegreesComponent } from './components/item-degrees/item-degrees.component';
import { LanguageComponent } from './components/language/language.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { MenuSmComponent } from './components/menu-sm/menu-sm.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModeDarkComponent } from './components/mode-dark/mode-dark.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ProfesionalGrowthComponent } from './components/profesional-growth/profesional-growth.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { SkillsSmComponent } from './components/skills-sm/skills-sm.component';
import { TitleComponent } from './components/title/title.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InfoComponent } from './pages/info/info.component';
import { SkillsComponent } from './pages/skills/skills.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PhotoComponent,
    MenuButtonComponent,
    InfoComponent,
    SkillsComponent,
    ExperienceComponent,
    CardUserComponent,
    AccordionInfoComponent,
    ItemCareerComponent,
    ItemDegreesComponent,
    ItemCoursesComponent,
    InfoItemComponent,
    InfoComponent,
    TitleComponent,
    SkillItemComponent,
    ProfesionalGrowthComponent,
    ExperienceItemComponent,
    ExperienceMenuItemComponent,
    NavbarComponent,
    ModeDarkComponent,
    MenuSmComponent,
    InfoSmComponent,
    SkillsSmComponent,
    HobbiesComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
