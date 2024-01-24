import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyDeuComponent } from './hobby-deu.component';

describe('HobbyDeuComponent', () => {
  let component: HobbyDeuComponent;
  let fixture: ComponentFixture<HobbyDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbyDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
