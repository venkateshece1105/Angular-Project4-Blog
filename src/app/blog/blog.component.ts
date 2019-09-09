import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})     
export class BlogComponent implements OnInit {
  currentParamaterId;
  constructor(public route:ActivatedRoute) { 
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.currentParamaterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
