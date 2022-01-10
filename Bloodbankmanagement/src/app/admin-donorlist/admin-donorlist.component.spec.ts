import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonorlistComponent } from './admin-donorlist.component';

describe('AdminDonorlistComponent', () => {
  let component: AdminDonorlistComponent;
  let fixture: ComponentFixture<AdminDonorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDonorlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
