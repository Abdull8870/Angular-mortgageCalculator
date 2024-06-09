import {Component,inject} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  private investService=inject(InvestmentService);

  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='0'


  onFormSubmit() {

    this.investService.CalculteMortgage({
      initialInvestment:+this.enteredInitialInvestment,
      annualInvestment:+this.enteredAnnualInvestment,
      expectedReturn:+this.enteredExpectedReturn,
      duration:+this.enteredDuration
    });


  }
}
