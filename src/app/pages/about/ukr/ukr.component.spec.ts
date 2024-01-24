import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkrComponent } from './ukr.component';

describe('UkrComponent', () => {
  let component: UkrComponent;
  let fixture: ComponentFixture<UkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
