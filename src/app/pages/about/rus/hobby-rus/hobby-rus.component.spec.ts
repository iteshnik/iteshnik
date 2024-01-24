import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyRusComponent } from './hobby-rus.component';

describe('HobbyRusComponent', () => {
  let component: HobbyRusComponent;
  let fixture: ComponentFixture<HobbyRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbyRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
