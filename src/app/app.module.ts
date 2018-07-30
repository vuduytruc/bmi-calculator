import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MetricBmiCalculatorComponent } from "./metric-bmi-calculator/metric-bmi-calculator.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyOwnCustomMaterialModule } from "./my-own-custom-material/my-own-custom-material-module";
import { MetricBmiResultComponent } from "./metric-bmi-result/metric-bmi-result.component";

import { BmiTableService } from "./bmi-table.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MetricBmiCalculatorComponent,
    MetricBmiResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [BmiTableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
