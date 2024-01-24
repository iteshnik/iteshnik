import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfUkrComponent } from './about-myself-ukr.component';

describe('AboutMyselfUkrComponent', () => {
  let component: AboutMyselfUkrComponent;
  let fixture: ComponentFixture<AboutMyselfUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMyselfUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMyselfUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
