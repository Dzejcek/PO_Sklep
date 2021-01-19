import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Product } from '../objects/Product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns = ['title', 'liczba', 'price', 'sum', 'delete'];
  dataSource: MatTableDataSource<Product>;
  categoryName = '';
  basketSum = 0;

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getProd();
    this.computeBasketValue();
  }

  getProd() {
    this.http.get('http://localhost:8080/api/produkts/inkoszyk').subscribe(productListDounloaded =>{this.dataSource.data = productListDounloaded as Product[]; this.computeBasketValue()})
  }

  getImgPath(productId): string {
    return `assets/img/${productId}.jpg`;
  }

  updateIlosc(prodID, ilosc) {
    ilosc = ilosc.target.value;
    let updateUrl = `http://localhost:8080/api/produkt-koszyks/changeIlosc/${prodID}/${ilosc}`;
    this.http.put(updateUrl, null).subscribe();
    this.dataSource.data.find(prod => prod.id === prodID).ilosc = ilosc;
    this.computeBasketValue();
  }

  zlozZamowienie() {
    let putUrl = "http://localhost:8080/api/zamowienies/new";
    this.http.post(putUrl, null).subscribe();
  }


  computeBasketValue() {
    let sum = 0;
    this.dataSource.data.forEach(element => {
      sum += element.cena * +element.ilosc;
    });
    this.basketSum = sum;
  }

  delete(idPassed) {
    console.log(idPassed)
    let deleteUrl = `http://localhost:8080/api/produkt-koszyks/${idPassed}`;
    this.http.delete(deleteUrl).subscribe();
    this.dataSource.data = this.dataSource.data.filter(prod => prod.id != idPassed)
    this.computeBasketValue()
    
  }

  sort() {
    this.dataSource.data.sort()
  }
}

