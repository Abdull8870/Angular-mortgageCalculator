import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MortgageData} from '../app.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='0'

  @Output() complete=new EventEmitter<MortgageData>();


  onFormSubmit() {

     this.complete.emit({
       initialInvestment:+this.enteredInitialInvestment,
       annualInvestment:+this.enteredAnnualInvestment,
       expectedReturn:+this.enteredExpectedReturn,
       duration:+this.enteredDuration
     });
  }
}
