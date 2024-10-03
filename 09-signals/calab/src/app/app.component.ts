import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { toObservable } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calab';
  
  constructor() {
    // Part 2
    // const quantity = signal(0)

    // effect(() => {
    //   console.log(`The current quantity is: ${quantity}`)
    // })

    // quantity.set(1)


    // Part 3
    // let increasingQuantity = new Observable<number>(observer => {
    //     let curVal = 0
    //     setInterval(() => observer.next(curVal += 1), 5000 );
    // })
    // let increasingQuantitySignal = toSignal(increasingQuantity, {initialValue: 0})

    // effect(() => {
    //     console.log(`The current quantity is: ${increasingQuantitySignal()}`)
    // })

    //Part 4
    let quantity = signal(0);
    let quantityObservable = toObservable(quantity);

    quantityObservable.subscribe({
        next: (v) => console.log(`Subscriber: The current quantity is: ${v}`),
        error: (e) => console.error(e),
        complete: () => console.info('Completed')
    })

}
}