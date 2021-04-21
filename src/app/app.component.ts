import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'omer hussain';

  constructor(){
    setTimeout(() => {
      this.title='Hello'
    }, 2000);
  }
  // changeName(name:string):void{
  //   this.name=name;
  // }
}
