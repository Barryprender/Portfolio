import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService]
})

export class HeaderComponent implements OnInit {

  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];
  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(pData => this.personalData$ = pData);
  }

}
