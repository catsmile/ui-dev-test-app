import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFinderComponent } from './image-finder.component';

describe('MyImageFinderComponent', () => {
  let component: ImageFinderComponent;
  let fixture: ComponentFixture<ImageFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
