import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  person = {
    fname: 'Praveen',
    lname: 'Reddy',
    city: 'Goa'
  }

  stringifiedData = JSON.stringify(this.person);  

  imgUrl = "/assets/tj.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
