import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor( private dataService: DataService) {}
  personalData$: PersonalData[];
  ngOnInit() {
    return this.dataService.getPortfolioPersonalData()
    .subscribe(courses => this.personalData$ = courses);
  }

}
