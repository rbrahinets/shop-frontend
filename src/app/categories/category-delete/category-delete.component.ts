import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/category.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryName: string;

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
  }

  private deleteCategory(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        for (const category of categories) {
          if (category.name === this.categoryName) {
            this.categoryService.deleteCategory(category);
            break;
          }
        }
      }
    );
  }
}
