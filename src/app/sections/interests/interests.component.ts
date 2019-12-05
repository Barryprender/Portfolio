import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  providers: [DataService]
})
export class InterestsComponent implements OnInit {

  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];
  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(interests => this.personalData$ = interests);
  }

}
