import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetricBmiCalculatorComponent } from './metric-bmi-calculator/metric-bmi-calculator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material-module';

@NgModule({
  declarations: [
    AppComponent,
    MetricBmiCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
