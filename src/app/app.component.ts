import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* link ref css */
  styleUrls: ['./app.component.css'], 
  /* css added directly */
  styles: [`
    h3 { 
      color: pink;
    }
  `]
})
export class AppComponent {
  title = 'my first app';
  name = 'Marco';
}
 