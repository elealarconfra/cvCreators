import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingInformationComponent } from './working-information.component';

describe('WorkingInformationComponent', () => {
  let component: WorkingInformationComponent;
  let fixture: ComponentFixture<WorkingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingInformationComponent]
    });
    fixture = TestBed.createComponent(WorkingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
