import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BioComponent } from '../sections/bio/bio.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { EducationComponent } from '../sections/education/education.component';
import { CareerHistoryComponent } from '../sections/career-history/career-history.component';
import { InterestsComponent } from '../sections/interests/interests.component';
import { ContactComponent } from '../sections/contact/contact.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MDBBootstrapModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
            { path: '', component: BioComponent },
            { path: 'Skills', component: SkillsComponent },
            { path: 'Edication', component: EducationComponent },
            { path: 'Experience', component: CareerHistoryComponent },
            { path: 'Ingerests', component: InterestsComponent },
            { path: 'Contact', component: ContactComponent }
          ]
        )
      ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
