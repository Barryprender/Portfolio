import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { EmpresaData } from '../../portfolioData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.scss'],
  providers: [DataService, HttpClient]
})

export class CareerHistoryComponent implements OnInit {
  constructor( private dataService: DataService) {}
  empresaData$: EmpresaData[];
  ngOnInit() {
    return this.dataService.getPortfolioEmpresaData()
    .subscribe(empData => this.empresaData$ = empData);
  }
}
