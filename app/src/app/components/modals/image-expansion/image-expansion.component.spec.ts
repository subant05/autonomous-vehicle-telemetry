import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageExpansionComponent } from './image-expansion.component';

describe('ImageExpansionComponent', () => {
  let component: ImageExpansionComponent;
  let fixture: ComponentFixture<ImageExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
