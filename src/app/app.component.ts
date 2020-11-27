import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';
  imgUrl="../assets/Logo/BridgeLabz New Logo.svg";
  url="https://www.google.co.in/";
  userName: string = "";

  ngOnInit():void {
    this.title="Bridgelabz says Hello";
  }

  onClick($event){
    console.log("A button is clicked!",$event);
    window.open(this.url,"_blank");
  }
}