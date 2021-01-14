import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../objects/Product';
import { BrowseProductsService } from './browse-products.service';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})

export class BrowseProductsComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['title', 'price'];
  dataSource: MatTableDataSource<Product>;
  categoryName = '';
 
  constructor(private route: ActivatedRoute, private productsService: BrowseProductsService) { }
  
  ngOnInit(): void {
   this.dataSource = new MatTableDataSource();
    this.route.url.subscribe(url => 
      this.productsService.getProductsByCat(this.route.snapshot.paramMap.get('cat')).subscribe(
        products => {
        this.dataSource.data = products; 
        this.dataSource.paginator = this.paginator; 
        this.categoryName = this.route.snapshot.paramMap.get('cat'); 
       }
      )
    );
  }

  getImgPath(productId): string {
    return `assets/img/${productId}.jpg`;
  }

  addToBasket(productId){
    this.productsService.addToBasket(productId);
  }

}
