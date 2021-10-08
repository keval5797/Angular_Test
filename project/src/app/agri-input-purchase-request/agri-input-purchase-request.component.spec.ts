import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriInputPurchaseRequestComponent } from './agri-input-purchase-request.component';

describe('AgriInputPurchaseRequestComponent', () => {
  let component: AgriInputPurchaseRequestComponent;
  let fixture: ComponentFixture<AgriInputPurchaseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriInputPurchaseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriInputPurchaseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
