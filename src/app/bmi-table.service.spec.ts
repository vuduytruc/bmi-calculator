import { TestBed, inject } from '@angular/core/testing';

import { BmiTableService } from './bmi-table.service';

describe('BmiTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BmiTableService]
    });
  });

  it('should be created', inject([BmiTableService], (service: BmiTableService) => {
    expect(service).toBeTruthy();
  }));
});
