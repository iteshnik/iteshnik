import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteImportantMessegeComponent } from './site-important-messege.component';

describe('SiteImportantMessegeComponent', () => {
  let component: SiteImportantMessegeComponent;
  let fixture: ComponentFixture<SiteImportantMessegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteImportantMessegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteImportantMessegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
