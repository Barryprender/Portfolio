import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { MaterialMenuComponent } from './material-menu/material-menu.component';

// Material components
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialCardComponent } from './material-card/material-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [
    HeaderComponent,
    SectionsComponent,
    BioComponent,
    SkillsComponent,
    CareerHistoryComponent,
    EducationComponent,
    InterestsComponent,
    MaterialMenuComponent,
    MaterialSliderComponent,
    MaterialCardComponent
  ],

})

export class SectionsModule { }
