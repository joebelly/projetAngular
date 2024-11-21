import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>bonjour vous tous</h1>
               <p>Dummy Paragraph</p>
               <button>Submit</button>`,

    styles: `h1{
            color:red;
            background:black
                }`,

    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class AppNavbar {}