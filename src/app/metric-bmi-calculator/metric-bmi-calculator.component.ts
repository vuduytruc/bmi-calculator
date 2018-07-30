import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-metric-bmi-calculator",
  templateUrl: "./metric-bmi-calculator.component.html",
  styleUrls: ["./metric-bmi-calculator.component.scss"]
})
export class MetricBmiCalculatorComponent implements OnInit {
  metricBmiForm = this.fb.group({
    age: ["", [Validators.min(0), Validators.max(150)]],
    sex: ["", [Validators.required, Validators.pattern(/^(male|female)$/i)]],
    height: ["", [Validators.required, Validators.min(1), Validators.max(300)]],
    weight: [
      "",
      [Validators.required, Validators.min(0.5), Validators.max(1000)]
    ]
  });
  bmi: number = undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  metricBmiCalculate() {
    const { height, weight } = this.metricBmiForm.value;
    const heightInMet = height / 100;
    this.bmi = weight / (heightInMet * heightInMet);
  }
}
