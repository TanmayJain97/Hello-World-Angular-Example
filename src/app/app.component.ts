import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';
  imgUrl="../assets/Logo/BridgeLabz New Logo.svg";

  ngOnInit():void {
    this.title="Bridgelabz says Hello";
  }
}
