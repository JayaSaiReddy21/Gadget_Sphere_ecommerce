import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhelpComponent } from './adminhelp.component';

describe('AdminhelpComponent', () => {
  let component: AdminhelpComponent;
  let fixture: ComponentFixture<AdminhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
