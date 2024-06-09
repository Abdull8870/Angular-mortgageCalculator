import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations:[AppComponent,UserInputComponent,InvestmentResultsComponent,HeaderComponent],
  imports:[BrowserModule,FormsModule],
  bootstrap:[AppComponent]
})
export class AppModule {

}
