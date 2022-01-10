import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeMainComponent } from './admin-home-main.component';

describe('AdminHomeMainComponent', () => {
  let component: AdminHomeMainComponent;
  let fixture: ComponentFixture<AdminHomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
