import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteRusComponent } from './about-site-rus.component';

describe('AboutSiteRusComponent', () => {
  let component: AboutSiteRusComponent;
  let fixture: ComponentFixture<AboutSiteRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSiteRusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSiteRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
