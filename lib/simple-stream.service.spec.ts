import { SimpleStreamService } from './simple-stream.service';
import { inject, TestBed } from '@angular/core/testing';

describe('SimpleStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SimpleStreamService
        }
      ]
    });
  });

  it('should be created', inject([SimpleStreamService], (service: SimpleStreamService) => {
    expect(service).toBeTruthy();
  }));
  
});
