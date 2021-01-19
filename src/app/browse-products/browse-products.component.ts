import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../objects/Product';
import { BrowseProductsService } from './browse-products.service';

const splitChar = '+';
@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})

export class BrowseProductsComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['nazwa', 'cena'];
  dataSource: MatTableDataSource<Product>;
  categoryName = '';
  @ViewChild(MatSort) sort: MatSort;


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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log(this.sort)
  }


  getImgPath(productId): string {
    return `assets/img/${productId}.jpg`;
  }

  addToBasket(productId){
    this.productsService.addToBasket(productId);
  }

  getColor(dostepny){
    if(dostepny === 'tak')
      return 'red';
    return 'green';
  }

  splitDesription(desc: string){
    return desc.split(splitChar);
  }


}
