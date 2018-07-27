import { RouterModule, Routes } from "@angular/router";
import { MetricBmiCalculatorComponent } from "./metric-bmi-calculator/metric-bmi-calculator.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MetricBmiCalculatorComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
