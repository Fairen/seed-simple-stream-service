import { SimpleStreamService } from './simple-stream.service';
import { inject, TestBed } from '@angular/core/testing';

export function simpleStreamServiceFactory() {
  return new SimpleStreamService();
}

describe('SimpleStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SimpleStreamService,
          useFactory: simpleStreamServiceFactory,
        }
      ]
    });
  });

  it('should be created', inject([SimpleStreamService], (service: SimpleStreamService) => {
    expect(service).toBeTruthy();
  }));

});
