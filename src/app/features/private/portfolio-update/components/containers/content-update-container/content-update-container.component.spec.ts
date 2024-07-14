import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentUpdateContainerComponent } from './content-update-container.component';

describe('PortfolioUpdateContainerComponent', () => {
  let component: ContentUpdateContainerComponent;
  let fixture: ComponentFixture<ContentUpdateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentUpdateContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
