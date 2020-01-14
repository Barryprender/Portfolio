import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent} from '././nav/nav.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { BioComponent } from './sections/bio/bio.component';
import { CareerHistoryComponent } from './sections/career-history/career-history.component';
import { EducationComponent } from './sections/education/education.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './sections/contact/contact.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
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
        ContactComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
