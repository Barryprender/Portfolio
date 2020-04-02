import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList: Array<{ navItemName: string, routeLink: string }> = [
    { navItemName: 'Bio', routeLink: 'Home' },
    { navItemName: 'Skills', routeLink: 'Skills' },
    { navItemName: 'Education', routeLink: 'Education' },
    { navItemName: 'Experience', routeLink: 'Experience' },
    { navItemName: 'Interests', routeLink: 'Interests' },
    { navItemName: 'Contact', routeLink: 'Contact' }
  ];



  // status = false;
  // onClickMe() {
  //   this.status = !this.status;
  // }


  constructor() { }

  ngOnInit() {
  }

}
