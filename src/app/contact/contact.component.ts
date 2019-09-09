import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formGroup;
  public dataArray = [];
  constructor() {
    this.formGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
   }
   submitData(){
     this.dataArray.push(this.formGroup.value);
     console.log(this.dataArray);
   }
  ngOnInit() {
  }

}
