import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsEngComponent } from './skils-eng.component';

describe('SkilsEngComponent', () => {
  let component: SkilsEngComponent;
  let fixture: ComponentFixture<SkilsEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilsEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkilsEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
