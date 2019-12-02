import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { EmpresaData } from '../../portfolioData';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.scss']
})

export class CareerHistoryComponent implements OnInit {
  constructor( private dataService: DataService) {}
  empresaData$: EmpresaData[];
  ngOnInit() {
    return this.dataService.getPortfolioEmpresaData()
    .subscribe(empData => this.empresaData$ = empData);
  }
}
