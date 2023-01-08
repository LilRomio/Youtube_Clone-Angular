import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() subMenuState;
  constructor() {}
  opened: boolean;
  showMenu = true;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  ngOnInit() {}

  ngOnChanges() {
    console.log('inside ngOnChanges with subMenuState: ', this.subMenuState);
    this.showMenu = this.subMenuState;
  }
}
