import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteEngComponent } from './about-site-eng.component';

describe('AboutSiteEngComponent', () => {
  let component: AboutSiteEngComponent;
  let fixture: ComponentFixture<AboutSiteEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSiteEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSiteEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
