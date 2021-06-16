import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTopicComponent } from './vehicle-topic.component';

describe('VehicleTopicComponent', () => {
  let component: VehicleTopicComponent;
  let fixture: ComponentFixture<VehicleTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
