import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvDeuComponent } from './my-cv-deu.component';

describe('MyCvDeuComponent', () => {
  let component: MyCvDeuComponent;
  let fixture: ComponentFixture<MyCvDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCvDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCvDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
