import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyUkrComponent } from './hobby-ukr.component';

describe('HobbyUkrComponent', () => {
  let component: HobbyUkrComponent;
  let fixture: ComponentFixture<HobbyUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbyUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
