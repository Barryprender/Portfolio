import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SectionsComponent } from './sections.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';



describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [
        SectionsComponent,
        SkillsComponent,
        BioComponent,
        CareerHistoryComponent,
        EducationComponent,
        InterestsComponent,
        ContactComponent
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
