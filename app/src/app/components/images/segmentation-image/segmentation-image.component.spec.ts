import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentationImageComponent } from './segmentation-image.component';

describe('SegmentationImageComponent', () => {
  let component: SegmentationImageComponent;
  let fixture: ComponentFixture<SegmentationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentationImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
