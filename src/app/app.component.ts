import { Component, OnInit } from '@angular/core';
import { PortfolioData } from './portfolioData';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portfolio2019';
  name = 'barry prendergast';
  portfolioData$: PortfolioData[];
  constructor( private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getPortfolioData()
    .subscribe(data => this.portfolioData$ = data);
  }
}
