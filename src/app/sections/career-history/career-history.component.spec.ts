import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CareerHistoryComponent } from './career-history.component';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

describe('CareerHistoryComponent', () => {
  let component: CareerHistoryComponent;
  let fixture: ComponentFixture<CareerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CareerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
