import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsUkrComponent } from './skils-ukr.component';

describe('SkilsUkrComponent', () => {
  let component: SkilsUkrComponent;
  let fixture: ComponentFixture<SkilsUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilsUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkilsUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
