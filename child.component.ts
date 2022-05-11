import { Component } from "@angular/core";

@Component({
    selector: 'child',
    template: `<br><h2>Child Component</h2>
                <input type="text" [value]="appTextBoxValue">`, //This step is optional ..Showing the value of parent component in child component i.e [value] =appTextBoxValue
                
    inputs: ['appTextBoxValue']
})

export class ChildComponent {
        public appTextBoxValue:string = '';
}