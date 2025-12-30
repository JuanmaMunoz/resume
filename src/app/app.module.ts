import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { FullRemoteComponent } from './components/full-remote/full-remote.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InfoLgComponent } from './components/info-lg/info-lg.component';
import { InfoSmComponent } from './components/info-sm/info-sm.component';
import { LanguageComponent } from './components/language/language.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { ModeDarkComponent } from './components/mode-dark/mode-dark.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OptionsComponent } from './components/options/options.component';
import { OtherDataComponent } from './components/other-data/other-data.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ProfesionalGrowthComponent } from './components/profesional-growth/profesional-growth.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { SkillsLgComponent } from './components/skills-lg/skills-lg.component';
import { SkillsSmComponent } from './components/skills-sm/skills-sm.component';
import { TitleComponent } from './components/title/title.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InfoComponent } from './pages/info/info.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ShineDirective } from './utils/shineDirective';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    MenuButtonComponent,
    InfoComponent,
    SkillsComponent,
    ExperienceComponent,
    CardUserComponent,
    AccordionInfoComponent,
    ExperienceItemComponent,
    InfoItemComponent,
    InfoComponent,
    TitleComponent,
    SkillItemComponent,
    ProfesionalGrowthComponent,
    ExperienceItemComponent,
    ExperienceMenuItemComponent,
    NavbarComponent,
    ModeDarkComponent,
    InfoSmComponent,
    SkillsSmComponent,
    HobbiesComponent,
    LanguageComponent,
    InfoLgComponent,
    SkillsLgComponent,
    OptionsComponent,
    LeftSideComponent,
    UserDataComponent,
    FullRemoteComponent,
    OtherDataComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ShineDirective,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
