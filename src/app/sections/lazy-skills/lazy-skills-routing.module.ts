import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LazySkillsComponent } from './lazy-skills.component';

const routes: Routes = [{ path: '', component: LazySkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySkillsRoutingModule { }
