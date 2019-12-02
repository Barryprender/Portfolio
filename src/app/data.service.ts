import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData, EmpresaData } from './portfolioData';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiUrl = 'http://barrypre.com/data/data.json';
  apiUrl = 'http://localhost:3000';

  constructor( private httpRequest: HttpClient ) { }

  getPortfolioData() {
    return this.httpRequest.get<PersonalData[]>(this.apiUrl);
  }

  getPortfolioPersonalData() {
    return this.httpRequest.get<PersonalData[]>(this.apiUrl + '/personalData');
  }

  getPortfolioEmpresaData() {
    return this.httpRequest.get<EmpresaData[]>(this.apiUrl + '/EmpresaData');
  }
}
