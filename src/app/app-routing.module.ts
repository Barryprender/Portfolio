import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './sections/bio/bio.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { CareerHistoryComponent } from './sections/career-history/career-history.component';
import { EducationComponent } from './sections/education/education.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { ContactComponent } from './sections/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BioComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: CareerHistoryComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'interests',
    component: InterestsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
