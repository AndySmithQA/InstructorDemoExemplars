import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

}
