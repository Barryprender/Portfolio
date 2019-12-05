import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DataService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should have getPortfolioData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getPortfolioData).toBeTruthy();
  });

  it('should have getPortfolioPersonalData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getPortfolioPersonalData).toBeTruthy();
  });

  it('should have getPortfolioEmpresaData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getPortfolioEmpresaData).toBeTruthy();
  });

});
