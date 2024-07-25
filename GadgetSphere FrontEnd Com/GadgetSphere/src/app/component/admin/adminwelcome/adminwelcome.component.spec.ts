import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwelcomeComponent } from './adminwelcome.component';

describe('AdminwelcomeComponent', () => {
  let component: AdminwelcomeComponent;
  let fixture: ComponentFixture<AdminwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminwelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
