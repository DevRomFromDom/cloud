import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData } from "@angular/common"
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { AddButtonComponent } from './header/add-button/add-button.component';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './content/title/title.component';
import { NavComponent } from './content/nav/nav.component';
import { FiltersComponent } from './content/filters/filters.component';
import { LessonsComponent } from './content/lessons/lessons.component';
import { LessonsItemComponent } from './content/lessons/lessons-item/lessons-item.component';
import { LessonModalComponent } from './content/lessons/lesson-modal/lesson-modal.component';
import { MenuIconComponent } from './images/icons/menu-icon/menu-icon.component';
import { AddIconComponent } from './images/icons/add-icon/add-icon.component';
import { PlanningIconComponent } from './images/icons/planning-icon/planning-icon.component';
import { ProgressIconComponent } from './images/icons/progress-icon/progress-icon.component';
import { EditButtonComponent } from './images/icons/edit-button/edit-button.component';

registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AddButtonComponent,
    ContentComponent,
    TitleComponent,
    NavComponent,
    FiltersComponent,
    LessonsComponent,
    LessonsItemComponent,
    LessonModalComponent,
    MenuIconComponent,
    AddIconComponent,
    PlanningIconComponent,
    ProgressIconComponent,
    EditButtonComponent,
  
  ],
  imports: [BrowserModule],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
