import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsDeuComponent } from './skils-deu.component';

describe('SkilsDeuComponent', () => {
  let component: SkilsDeuComponent;
  let fixture: ComponentFixture<SkilsDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilsDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkilsDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
