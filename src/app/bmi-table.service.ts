import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BmiTableService {
  bmiTable = [
    {
      type: "Obese Class III",
      lowerBound: 40
    },
    {
      type: "Obese Class II",
      lowerBound: 35
    },
    {
      type: "Obese Class I",
      lowerBound: 30
    },
    {
      type: "Overweight",
      lowerBound: 25
    },
    {
      type: "Normal",
      lowerBound: 18.5
    },
    {
      type: "Mild Thinness",
      lowerBound: 17
    },
    {
      type: "Moderate Thinness",
      lowerBound: 16
    },
    {
      type: "Severe Thinness",
      lowerBound: 0
    }
  ];

  getBmiTable() {
    return this.bmiTable;
  }

  getClassification = (bmi) => {
    let classification, findClass = false;
    this.bmiTable.forEach(item => {
      if (!findClass && item.lowerBound < bmi) {
        classification = item.type;
        findClass = true;
      }
    });
    return classification;
  }

  constructor() {}
}
