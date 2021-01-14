import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../objects/Product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['title', 'price'];
  dataSource: MatTableDataSource<Product>;
  categoryName = '';
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getProd();
  }

  getProd() {
    this.http.get('http://localhost:8080/api/produkts/inkoszyk').subscribe(productListDounloaded =>{this.dataSource.data = productListDounloaded as Product[]; console.log(this.dataSource.data) })
    
  }

  getImgPath(productId): string {
    return `assets/img/${productId}.jpg`;
  }

  updateIlosc(prodID, ilosc) {
    ilosc = ilosc.target.value;
    let updateUrl = `http://localhost:8080/api/produkt-koszyks/changeIlosc/${prodID}/${ilosc}`;
    this.http.put(updateUrl, null).subscribe();
  }

  zlozZamowienie() {
    let putUrl = "http://localhost:8080/api/zamowienies/new";
    this.http.post(putUrl, null).subscribe();
  }
}

