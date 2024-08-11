import { TestBed } from '@angular/core/testing';

import { ModalAnimationService } from './modal-animation.service';

describe('ModalAnimationService', () => {
  let service: ModalAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
