import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SectionsComponent } from './sections.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    SectionsComponent,
    BioComponent,
    SkillsComponent,
    CareerHistoryComponent,
    EducationComponent,
    InterestsComponent,
    ContactComponent,
  ],

})

export class SectionsModule { }
