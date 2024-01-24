import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfRusComponent } from './about-myself-rus.component';

describe('AboutMyselfRusComponent', () => {
  let component: AboutMyselfRusComponent;
  let fixture: ComponentFixture<AboutMyselfRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMyselfRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMyselfRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
