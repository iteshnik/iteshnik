import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteUkrComponent } from './about-site-ukr.component';

describe('AboutSiteUkrComponent', () => {
  let component: AboutSiteUkrComponent;
  let fixture: ComponentFixture<AboutSiteUkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSiteUkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSiteUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
