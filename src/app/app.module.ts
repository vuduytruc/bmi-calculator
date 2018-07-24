import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetricBmiCalculatorComponent } from './metric-bmi-calculator/metric-bmi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricBmiCalculatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
