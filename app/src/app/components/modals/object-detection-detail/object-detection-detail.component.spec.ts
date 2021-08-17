import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetectionDetailComponent } from './object-detection-detail.component';

describe('ObjectDetectionDetailComponent', () => {
  let component: ObjectDetectionDetailComponent;
  let fixture: ComponentFixture<ObjectDetectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectDetectionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
