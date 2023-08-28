import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCVComponent } from './photo-cv.component';

describe('PhotoCVComponent', () => {
  let component: PhotoCVComponent;
  let fixture: ComponentFixture<PhotoCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoCVComponent]
    });
    fixture = TestBed.createComponent(PhotoCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
