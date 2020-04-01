import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySkillsRoutingModule } from './lazy-skills-routing.module';
import { LazySkillsComponent } from './lazy-skills.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [LazySkillsComponent],
  imports: [
    CommonModule,
    LazySkillsRoutingModule,
    MDBBootstrapModule
  ]
})
export class LazySkillsModule { }
