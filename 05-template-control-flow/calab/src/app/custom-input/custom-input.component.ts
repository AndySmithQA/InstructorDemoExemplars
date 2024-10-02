import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  title = 'calab';
  value:string = '';

  onInputChange(event: any) {
    this.value = event.target.value;
  }
}
