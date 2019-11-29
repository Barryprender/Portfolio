import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { PersonalData } from '../../portfolioData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  constructor( private dataService: DataService) {}
  skillsData$: PersonalData['skills'];
  ngOnInit() {
    return this.dataService.getSkillsData()
    .subscribe(skills => this.skillsData$ = skills);
  }

}
