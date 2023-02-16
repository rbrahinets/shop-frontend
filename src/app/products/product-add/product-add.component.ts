import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../categories/shared/category.service';
import {Category} from '../../categories/shared/category.model';

@Component({
  selector: 'shop-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.setCategories();
  }

  private setCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }
}
