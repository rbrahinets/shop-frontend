import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../shared/category.service";
import {Category} from "../shared/category.model";

@Component({
  selector: 'shop-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories) => this.categories = categories
    );
  }

  click(id: number): void {
    alert(`Go to categories/${id}`);
  }
}