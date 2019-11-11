import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { HeaderComponent } from './sections/header/header.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { BioComponent } from './sections/bio/bio.component';
import { CareerHistoryComponent } from './sections/career-history/career-history.component';
import { EducationComponent } from './sections/education/education.component';
import { InterestsComponent } from './sections/interests/interests.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SectionsComponent,
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

  it(`should have as title 'portfolio2019'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('portfolio2019');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('.content span').textContent).toContain('portfolio2019 app is running!');
  });
});
