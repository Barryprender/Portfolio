import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';

import { LazySkillsComponent } from './lazy-skills.component';

describe('LazySkillsComponent', () => {
  let component: LazySkillsComponent;
  let fixture: ComponentFixture<LazySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MDBBootstrapModule.forRoot()],
      declarations: [ LazySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
