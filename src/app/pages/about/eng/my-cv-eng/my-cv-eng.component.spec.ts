import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvEngComponent } from './my-cv-eng.component';

describe('MyCvEngComponent', () => {
  let component: MyCvEngComponent;
  let fixture: ComponentFixture<MyCvEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCvEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCvEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
