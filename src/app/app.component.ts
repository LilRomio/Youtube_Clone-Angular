import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-angular';
  subMenuState: boolean = false;
  burgerClicked(event: boolean) {
    this.subMenuState = event;
  }
}
