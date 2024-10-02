import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [ChildComponent],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent {
    parentMessage = "Message from parent to child";
    childMessage: string | undefined;

    receiveMessage($event: any) {
        this.childMessage = $event;
    }
}
