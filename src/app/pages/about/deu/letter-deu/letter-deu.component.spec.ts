import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDeuComponent } from './letter-deu.component';

describe('LetterDeuComponent', () => {
  let component: LetterDeuComponent;
  let fixture: ComponentFixture<LetterDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
