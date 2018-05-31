import { TestBed, async, inject } from '@angular/core/testing';

import { PostDetailsGuard } from './post-details.guard';

describe('PostDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDetailsGuard]
    });
  });

  it('should ...', inject([PostDetailsGuard], (guard: PostDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
