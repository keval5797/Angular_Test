import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriPurchaseManagementComponent } from './agri-purchase-management.component';

describe('AgriPurchaseManagementComponent', () => {
  let component: AgriPurchaseManagementComponent;
  let fixture: ComponentFixture<AgriPurchaseManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriPurchaseManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriPurchaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
