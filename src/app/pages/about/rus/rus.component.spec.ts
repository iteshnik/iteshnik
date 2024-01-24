import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RusComponent } from './rus.component';

describe('RusComponent', () => {
  let component: RusComponent;
  let fixture: ComponentFixture<RusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
