import { Component, OnInit } from "@angular/core";
import { BmiTableService } from "../bmi-table.service";

@Component({
  selector: "app-metric-bmi-result",
  templateUrl: "./metric-bmi-result.component.html",
  styleUrls: ["./metric-bmi-result.component.scss"]
})
export class MetricBmiResultComponent implements OnInit {
  contentMsg = "Please input form above!";
  alignContent = "center-content";
  hiddenResult = ""; // "hidden";

  constructor(public bmiTableService: BmiTableService) {}

  ngOnInit() {
    // this.contentMsg = this.bmiTableService.getClassification(19);
  }
}
