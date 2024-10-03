import { Component } from '@angular/core';
import { ReactiveFormsModule, 
         FormControl,
         FormGroup, 
         FormBuilder, 
         FormArray,
         Validators,
         ValidatorFn,
         AbstractControl,
         ValidationErrors 
                  } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})

export class OrderFormComponent {

  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      product: ['', Validators.required, this.forbiddenNameValidator()],
      quantity: ['', Validators.required],
      instructions: this.formBuilder.array([this.formBuilder.control('')])
    });
  }
  onSubmit() {
    console.warn(this.orderForm.value);
  }

  get instructions() {
    return this.orderForm.get('instructions') as FormArray;
  }

  addInstruction() {
    this.instructions.push(this.formBuilder.control(''));
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const list = ['Lightsaber', 'Millennium Falcon'];
      const forbidden = list.includes(control.value);
      return new Observable<ValidationErrors | null>(observer => {
        observer.next(forbidden ? { forbiddenName: { value: control.value } } : null);
        observer.complete();
      });
    };
  }

  
    // 4.2
    // ngOnInit() { 
    //   this.orderForm.get('product')?.valueChanges.subscribe(data => console.log(`Product updated to ${data}`));
    //   this.orderForm.get('quantity')?.valueChanges.subscribe(data => console.log(`Quantity updated to ${data}`));
    // }

 
  
}
