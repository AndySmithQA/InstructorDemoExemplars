import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-custom-input',
    standalone: true,
    imports: [],
    templateUrl: './custom-input.component.html',
    styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
    @Input() value: string | undefined;
    @Output() valueChange = new EventEmitter<string>();

    onInputChange(event: any) {
        this.value = event.target.value;
        this.valueChange.emit(this.value);
    }
}
