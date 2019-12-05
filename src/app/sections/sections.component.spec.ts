import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SectionsComponent } from './sections.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';


describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        SectionsComponent,
        HeaderComponent,
        SkillsComponent,
        BioComponent,
        CareerHistoryComponent,
        EducationComponent,
        InterestsComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
