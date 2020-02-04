import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList: Array<{navItem: string, routeLink: string}> = [
    { navItem: 'Bio', routeLink: '' },
    { navItem: 'Skills', routeLink: 'Skills' },
    { navItem: 'Education', routeLink: 'Education' },
    { navItem: 'Experience', routeLink: 'Experience' },
    { navItem: 'Interests', routeLink: 'Interests' },
    { navItem: 'Contact', routeLink: 'Contact' }
  ];



  status = false;
  onClickMe() {
    this.status = !this.status;
  }



  constructor() { }

  ngOnInit() {
  }

}
