import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { BmiTableService } from "../bmi-table.service";

@Component({
  selector: "app-metric-bmi-result",
  templateUrl: "./metric-bmi-result.component.html",
  styleUrls: ["./metric-bmi-result.component.scss"]
})
export class MetricBmiResultComponent implements OnInit, OnChanges {
  @Input() private bmi: number;
  contentMsg = "Please input form above!";
  alignContent = "center-content";
  hiddenResult: string; // "hidden" or ""

  constructor(public bmiTableService: BmiTableService) {}

  ngOnInit() {
    // this.contentMsg = this.bmiTableService.getClassification(19);
  }

  ngOnChanges(changes: SimpleChanges) {
    let bmi = changes["bmi"].currentValue;
    bmi = Math.round(bmi * 10) / 10;
    let classification = this.bmiTableService.getClassification(bmi);
    this.contentMsg = `Your BMI: ${bmi} (${classification})`;
    if (!!bmi) {
      this.hiddenResult = "";
    } else {
      this.hiddenResult = "hidden";
      this.contentMsg = "Please input form above!";
    }
  }
}
