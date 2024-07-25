import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfindComponent } from './adminfind.component';

describe('AdminfindComponent', () => {
  let component: AdminfindComponent;
  let fixture: ComponentFixture<AdminfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminfindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
