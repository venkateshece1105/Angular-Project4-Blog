import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentListingComponent } from './blog-content-listing.component';

describe('BlogContentListingComponent', () => {
  let component: BlogContentListingComponent;
  let fixture: ComponentFixture<BlogContentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
