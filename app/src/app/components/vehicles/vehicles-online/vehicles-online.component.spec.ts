import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesOnlineComponent } from './vehicles-online.component';

describe('VehiclesOnlineComponent', () => {
  let component: VehiclesOnlineComponent;
  let fixture: ComponentFixture<VehiclesOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
