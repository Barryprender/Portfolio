import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { HeaderComponent } from './sections/header/header.component';
import { NavComponent} from './sections/nav/nav.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { BioComponent } from './sections/bio/bio.component';
import { CareerHistoryComponent } from './sections/career-history/career-history.component';
import { EducationComponent } from './sections/education/education.component';
import { InterestsComponent } from './sections/interests/interests.component';


import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SectionsComponent,
        NavComponent,
        HeaderComponent,
        SkillsComponent,
        BioComponent,
        CareerHistoryComponent,
        EducationComponent,
        InterestsComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
