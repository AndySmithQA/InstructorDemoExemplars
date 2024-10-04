import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from './order';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})

export class OrderFormComponent {
  order = new Order('')

  onSubmit() {
    console.log('Order submitted', this.order);
  }
}


