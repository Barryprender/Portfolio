import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];
  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(pData => this.personalData$ = pData);
  }

}
