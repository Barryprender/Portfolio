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
    redirectTo: 'Home',
  },
  {
    path: 'Home',
    component: BioComponent
  },
  {
    path: 'Skills',
    component: SkillsComponent
  },
  {
    path: 'lazy-skills',
    loadChildren: () => import('src/app/sections/lazy-skills/lazy-skills.module').then (m => m.LazySkillsModule)
  },
  {
    path: 'Experience',
    component: CareerHistoryComponent
  },
  {
    path: 'Education',
    component: EducationComponent
  },
  {
    path: 'Interests',
    component: InterestsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  { path: 'l-skills', loadChildren: () => import('./sections/lazy-skills/lazy-skills.module').then(m => m.LazySkillsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
