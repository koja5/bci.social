import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDeliveringComponent } from './about-us-delivering.component';

describe('AboutUsDeliveringComponent', () => {
  let component: AboutUsDeliveringComponent;
  let fixture: ComponentFixture<AboutUsDeliveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDeliveringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsDeliveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
