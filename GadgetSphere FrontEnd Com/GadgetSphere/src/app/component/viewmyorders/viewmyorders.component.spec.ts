import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyordersComponent } from './viewmyorders.component';

describe('ViewmyordersComponent', () => {
  let component: ViewmyordersComponent;
  let fixture: ComponentFixture<ViewmyordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewmyordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
