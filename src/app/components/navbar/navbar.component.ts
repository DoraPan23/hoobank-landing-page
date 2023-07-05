import { Component } from '@angular/core';

import { navLinks } from '../../../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks = navLinks;
  toggle: boolean = false;

  constructor() {
    console.log(this.navLinks);
  }
}
