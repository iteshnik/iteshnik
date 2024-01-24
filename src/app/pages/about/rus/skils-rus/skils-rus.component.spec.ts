import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsRusComponent } from './skils-rus.component';

describe('SkilsRusComponent', () => {
  let component: SkilsRusComponent;
  let fixture: ComponentFixture<SkilsRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilsRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkilsRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
