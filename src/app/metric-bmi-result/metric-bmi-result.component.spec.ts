import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBmiResultComponent } from './metric-bmi-result.component';

describe('MetricBmiResultComponent', () => {
  let component: MetricBmiResultComponent;
  let fixture: ComponentFixture<MetricBmiResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBmiResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBmiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
