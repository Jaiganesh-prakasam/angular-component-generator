import { TestBed } from '@angular/core/testing';

import { LayoutPreviewService } from './layout-preview.service';

describe('LayoutPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutPreviewService = TestBed.get(LayoutPreviewService);
    expect(service).toBeTruthy();
  });
});
