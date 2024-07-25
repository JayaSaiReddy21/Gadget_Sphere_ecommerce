import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldproductsComponent } from './soldproducts.component';

describe('SoldproductsComponent', () => {
  let component: SoldproductsComponent;
  let fixture: ComponentFixture<SoldproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoldproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoldproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
