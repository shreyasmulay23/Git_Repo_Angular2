/**
 * Created by Shreyas on 3/18/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello  : <strong>{{name}}</strong></h1>
    <p><strong>Email :</strong> {{email}}</p> 
    <p><strong>Address:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>
    <p><button class="btn btn-primary" (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button></p>
    <div *ngIf="showHobbies">
      <p><strong>Hobbies: </strong></p>
        <ul>
            <li *ngFor = "let hobbie of hobbies">
              {{hobbie}}
            </li>
          </ul>
    </div>
            
    
    `,
})
export class UserComponent {
  name: string;
  email: string;
  address: {};
  hobbies: string[];
  showHobbies:boolean = false;

  constructor() {
    this.name = 'Shreyas';
    this.email = 'shreyasmulay23@gmail.com';
    this.address = {
      street: "62, MIG, Indiranagar",
      city: "Ujjain",
      state: "M.P."
    };
    this.hobbies = ["Music", "Movies", "Sports"];
  }

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false
    }else{
      this.showHobbies = true;
    }
  }
}
