import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BioComponent } from './bio.component';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ BioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create bio component', () => {
    expect(component).toBeTruthy();
  });
});
