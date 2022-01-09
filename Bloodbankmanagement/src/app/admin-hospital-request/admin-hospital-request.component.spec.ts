import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalRequestComponent } from './admin-hospital-request.component';

describe('AdminHospitalRequestComponent', () => {
  let component: AdminHospitalRequestComponent;
  let fixture: ComponentFixture<AdminHospitalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHospitalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHospitalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
