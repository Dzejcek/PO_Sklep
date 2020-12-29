import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../objects/Product';

const  productList: Array<Product> = [{title: "TV 1500", price: 1000}, {title: "TV 1700", price: 1500}];
@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})

export class BrowseProductsComponent implements OnInit {
  displayedColumns = ['title', 'price'];
  dataSource = productList;
  categoryName = '';
 
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(param => this.categoryName = param.category);
  }

}
