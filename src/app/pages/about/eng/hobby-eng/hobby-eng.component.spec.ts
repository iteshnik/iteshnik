import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyEngComponent } from './hobby-eng.component';

describe('HobbyEngComponent', () => {
  let component: HobbyEngComponent;
  let fixture: ComponentFixture<HobbyEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbyEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
