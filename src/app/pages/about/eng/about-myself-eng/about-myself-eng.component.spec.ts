import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfEngComponent } from './about-myself-eng.component';

describe('AboutMyselfEngComponent', () => {
  let component: AboutMyselfEngComponent;
  let fixture: ComponentFixture<AboutMyselfEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMyselfEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMyselfEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
