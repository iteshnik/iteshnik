import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteDeuComponent } from './about-site-deu.component';

describe('AboutSiteDeuComponent', () => {
  let component: AboutSiteDeuComponent;
  let fixture: ComponentFixture<AboutSiteDeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSiteDeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSiteDeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
