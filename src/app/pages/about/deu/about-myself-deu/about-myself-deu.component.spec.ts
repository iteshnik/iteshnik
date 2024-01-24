import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfDeuComponent } from './about-myself-deu.component';

describe('AboutMyselfDeuComponent', () => {
  let component: AboutMyselfDeuComponent;
  let fixture: ComponentFixture<AboutMyselfDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMyselfDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMyselfDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
