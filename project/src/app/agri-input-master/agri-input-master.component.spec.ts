import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriInputMasterComponent } from './agri-input-master.component';

describe('AgriInputMasterComponent', () => {
  let component: AgriInputMasterComponent;
  let fixture: ComponentFixture<AgriInputMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriInputMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriInputMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
