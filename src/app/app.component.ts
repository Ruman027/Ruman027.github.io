import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,ContactComponent
  ,NavbarComponent,PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todo-list';
  head='First Angular Project';
}
