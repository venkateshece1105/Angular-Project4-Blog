import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogContentListingComponent } from './blog-content-listing/blog-content-listing.component';
import { BlogContentListingWebDesignComponent } from './blog-content-listing-web-design/blog-content-listing-web-design.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'http',
    component : HttpComponent
  },
  {
    path : 'blog/:id',
    component : BlogComponent
  },


  {
    path : 'bloglist',
    component : BlogListComponent,
    children : [
      {
        path : 'html',
        component : BlogContentListingComponent
      },
      {
        path : 'webdesign',
        component : BlogContentListingWebDesignComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
