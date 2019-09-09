import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  welcomeMessage = "A Warm Welcome!";
  currectDate = new Date();
  price = 20000;
  constructor() { }

  ngOnInit() {
  }

}
