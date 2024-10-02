import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsAuthDirective } from './is-auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IsAuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calab';
}
