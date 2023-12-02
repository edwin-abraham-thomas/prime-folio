import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUpdateContainerComponent } from './portfolio-update-container.component';

describe('PortfolioUpdateContainerComponent', () => {
  let component: PortfolioUpdateContainerComponent;
  let fixture: ComponentFixture<PortfolioUpdateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioUpdateContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
