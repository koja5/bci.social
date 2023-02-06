import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUsPromoComponent } from './call-us-promo.component';

describe('CallUsPromoComponent', () => {
  let component: CallUsPromoComponent;
  let fixture: ComponentFixture<CallUsPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallUsPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallUsPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
