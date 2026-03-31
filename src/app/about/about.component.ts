import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  contactInfo = {
    name: 'David Rodriguez Barron',
    email: 'davidrodriguezbarron2004@gmail.com',
    phone: 'cel. +525580548455'
  };
}
