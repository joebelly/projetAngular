import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  imgURL: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j8BlLTCsR6Qojbkhs2BW9IVErqdoW5EmOg&s'

  isDisabled: boolean = true;
  isActive: boolean = true;

  fruitName: string = 'Apple'

  userName: string = 'John Doe';

  textValue: string ='value is coming from component';

  buttonClick() {
    console.log('Button Clicked');
  }
  KeyEnter(event:any){
    //console.log(event.keyCode);
    if(event.keyCode == 72)
    {
      console.log('Enter key Pressed')
    }
}
  keyupFiltering(user:HTMLInputElement) {
    console.log(user.id);
  }
  updateUserName(username:HTMLInputElement) {

  }

  onKeyup() {
    console.log(this.textValue);
  }

  //isLoggedIn:boolean = false;
  //isLoggedIn:boolean = false;
  //UserName: string = 'John Doe';
  ///isAdmin: boolean = false;
  //isMember: boolean = false;
  //isGuest: boolean = true;

  //loginCount: number = 0;

  //countLoginAttempts() {
  ////this.loginCount ++;
  //console.log(this.loginCount);
  //}
  isLoggedIn: boolean = false;
  currentCustomer: boolean = true;
  name: string = 'Mangues'
  Nom: string = 'Iradukunda Lievin'
  longCount: number = 0;
  countLoginAttempts() {
    this.longCount ++;
    console.log(this.longCount);
  }

  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;
  UserRole: string = "Member";
 }
