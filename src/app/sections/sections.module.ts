import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';


import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule
  ],
  declarations: [
    HeaderComponent,
    SectionsComponent,
    BioComponent,
    SkillsComponent,
    CareerHistoryComponent,
    EducationComponent,
    InterestsComponent,
  ],

})

export class SectionsModule { }
