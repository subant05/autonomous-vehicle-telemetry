import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfireComponent } from './starfire.component';

describe('StarfireComponent', () => {
  let component: StarfireComponent;
  let fixture: ComponentFixture<StarfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarfireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
