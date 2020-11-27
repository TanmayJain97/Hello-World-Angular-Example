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
  userName: string = "Tanmay";
  nameError: string = "";

  ngOnInit():void {
    this.title="Bridgelabz says Hello";
  }

  onClick($event){
    console.log("A button is clicked!",$event);
    window.open(this.url,"_blank");
  }

  onInput($event){
    console.log("Change Event Occured!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$'); 
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    if(this.userName==""){
      this.nameError = "Empty Field!!";
      return;
    }
    this.nameError = "Name is Invalid!";
  }
}