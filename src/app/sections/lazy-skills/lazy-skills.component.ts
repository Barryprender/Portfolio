import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-lazy-skills',
  templateUrl: './lazy-skills.component.html',
  styleUrls: ['./lazy-skills.component.scss']
})
export class LazySkillsComponent implements OnInit {

  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];

  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(pData => this.personalData$ = pData);
  }

}
