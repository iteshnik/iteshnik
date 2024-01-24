import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvRusComponent } from './my-cv-rus.component';

describe('MyCvRusComponent', () => {
  let component: MyCvRusComponent;
  let fixture: ComponentFixture<MyCvRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCvRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCvRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
