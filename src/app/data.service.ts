import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioData } from './portfolioData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://barrypre.com/data/data.json';
  // apiUrl = 'hhttp://my-json-server.typicode.com/Barryprender/test-data-service/db.json';

  constructor( private httpRequest: HttpClient ) { }

  getPortfolioData() {
    return this.httpRequest.get<PortfolioData[]>(this.apiUrl);
  }
}
