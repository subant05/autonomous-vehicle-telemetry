import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbImageComponent } from './rgb-image.component';

describe('RgbImageComponent', () => {
  let component: RgbImageComponent;
  let fixture: ComponentFixture<RgbImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
