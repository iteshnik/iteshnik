import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterRusComponent } from './letter-rus.component';

describe('LetterRusComponent', () => {
  let component: LetterRusComponent;
  let fixture: ComponentFixture<LetterRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
