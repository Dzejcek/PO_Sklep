import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../objects/Product';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  listProducts: Product[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  //this.complaintService.loginUser()
  }

  getProd() {
    this.http.get('http://localhost:8080/api/produkts/inkoszyk').subscribe(productListDounloaded =>{this.listProducts = productListDounloaded as Product[] ; console.log(this.listProducts)})
    
  }

}
