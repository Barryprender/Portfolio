import { Component, OnInit } from '@angular/core';
import { PersonalData } from './portfolioData';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  portfolioData$: PersonalData[];
  constructor( private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getPortfolioData()
    .subscribe(data => this.portfolioData$ = data);
  }
}
