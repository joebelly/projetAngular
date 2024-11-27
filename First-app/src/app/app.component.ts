import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  imgURL: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j8BlLTCsR6Qojbkhs2BW9IVErqdoW5EmOg&s'

  isDisabled: boolean = true;
  isActive: boolean = false;

  fruitName: string = 'Apple'
}
