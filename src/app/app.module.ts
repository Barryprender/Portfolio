import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './sections/sections.component';
import { SectionsModule } from './sections/sections.module';
import { DataService } from './data.service';

const routes: Routes = [
  {
    path: '',
    component: SectionsComponent
  }
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    HttpClientModule,
    SectionsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
