import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBmiCalculatorComponent } from './metric-bmi-calculator.component';

describe('MetricBmiCalculatorComponent', () => {
  let component: MetricBmiCalculatorComponent;
  let fixture: ComponentFixture<MetricBmiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBmiCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
