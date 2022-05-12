import { Component, EventEmitter } from "@angular/core";


@Component({
    selector: 'child',
    template: `<br><h2>Child Component</h2>
                <input type="text" [value]="appTextBoxValue">
                <input type="text" #childTextBox (keyup)="handleTextBoxChange(childTextBox.value)">`, 

    outputs:['childEvent'], //emit this -->pass this to parent component
    inputs: ['appTextBoxValue']
})

export class ChildComponent {
        public appTextBoxValue:string = '';

        public childEvent:EventEmitter<string> = new EventEmitter();  //creating field which we want to emit
        handleTextBoxChange(textBoxValue: any){
            console.log("handleTextBoxChange()", textBoxValue);
            this.childEvent.emit(textBoxValue);
        }
}