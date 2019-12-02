import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {
  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];
  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(pData => this.personalData$ = pData);
  }

}
