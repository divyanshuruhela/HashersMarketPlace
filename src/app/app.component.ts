import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { DUMMY_ITEMS } from './items-service';
import { RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'hashers-marketplace';
  constructor(){
  }
}

