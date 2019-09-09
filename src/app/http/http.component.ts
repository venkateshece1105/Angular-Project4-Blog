import { Component, OnInit, Input } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
// arrayData;
@Input('dataArray') dataArray;

constructor( ) { 
  
}  
// constructor(public http : HttpClient ) { }  


  ngOnInit() {
  // this.http.get('https://5d11b9ba84e90600145764b9.mockapi.io/user')
  // .toPromise()
  // .then(
  //  (response)=>{
  //    console.log(response);
  //    this.arrayData = response;
  //    console.log();
  //  },
  //  (error) => {
  //    console.log(error);
  //  } )  
  console.log(this.dataArray);
  }

}
