import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price']

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  
}
