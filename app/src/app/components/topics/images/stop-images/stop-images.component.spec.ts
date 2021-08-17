import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopImagesComponent } from './stop-images.component';

describe('StopImagesComponent', () => {
  let component: StopImagesComponent;
  let fixture: ComponentFixture<StopImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
