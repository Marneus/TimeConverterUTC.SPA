/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimezoneService } from './timezone.service';

describe('Service: Timezone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimezoneService]
    });
  });

  it('should ...', inject([TimezoneService], (service: TimezoneService) => {
    expect(service).toBeTruthy();
  }));
});
