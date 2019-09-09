import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentListingWebDesignComponent } from './blog-content-listing-web-design.component';

describe('BlogContentListingWebDesignComponent', () => {
  let component: BlogContentListingWebDesignComponent;
  let fixture: ComponentFixture<BlogContentListingWebDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContentListingWebDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentListingWebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
