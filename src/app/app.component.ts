import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DevOps';

  public newFunction(value: Number) {
    if (value > 1) {
      return true;
    } else {
      return false;
    }
  }
}
