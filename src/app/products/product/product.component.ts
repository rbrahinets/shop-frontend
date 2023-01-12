import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  imagePath: string;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let path: string[] = (<string>this.router.url).split('/');
    const id: number = +path[path.length - 1];

    this.productService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
        this.imagePath = product.image;
      }
    );
  }
}
