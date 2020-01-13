import { Component, OnInit } from '@angular/core';
import { ContactDataModel } from '../../contactModule';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {

  constructor() {}
  name: string;
  email: string;
  message: string;

  model = new ContactDataModel('', '', '');

  newContact() {
    this.model = new ContactDataModel('', '', '');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {}


}
