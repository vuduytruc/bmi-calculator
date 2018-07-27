import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-bmi-calculator',
  templateUrl: './metric-bmi-calculator.component.html',
  styleUrls: ['./metric-bmi-calculator.component.scss']
})
export class MetricBmiCalculatorComponent implements OnInit {
  bmiForm = {
    age: undefined,
    sex: undefined,
    height: undefined,
    weight: undefined
  }
  bmi: number = undefined;

  constructor() { }

  ngOnInit() {
  }

  metricBmiCalculate() {
    let { height, weight } = this.bmiForm;
    height /= 100;
    this.bmi = weight / (height * height);
    console.log("BMI = " + this.bmi);
  }

}
