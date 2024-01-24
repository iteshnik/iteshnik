import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvUkrComponent } from './my-cv-ukr.component';

describe('MyCvUkrComponent', () => {
  let component: MyCvUkrComponent;
  let fixture: ComponentFixture<MyCvUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCvUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCvUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
