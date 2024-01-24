import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterUkrComponent } from './letter-ukr.component';

describe('LetterUkrComponent', () => {
  let component: LetterUkrComponent;
  let fixture: ComponentFixture<LetterUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
