import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterEngComponent } from './letter-eng.component';

describe('LetterEngComponent', () => {
  let component: LetterEngComponent;
  let fixture: ComponentFixture<LetterEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
