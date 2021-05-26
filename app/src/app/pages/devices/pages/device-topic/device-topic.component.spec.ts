import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTopicComponent } from './device-topic.component';

describe('DeviceTopicComponent', () => {
  let component: DeviceTopicComponent;
  let fixture: ComponentFixture<DeviceTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
