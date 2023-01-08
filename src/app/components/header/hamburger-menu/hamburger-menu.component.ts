import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  @Output() menuState = new EventEmitter();

  constructor() {}
  opened: boolean;
  showMenu = false; /* false by default, since hidden */
  toggleMenu() {
    console.log('inside toggleMenu');
    this.showMenu = !this.showMenu;
    this.menuState.emit(this.showMenu);
  }
  ngOnInit() {}
}
