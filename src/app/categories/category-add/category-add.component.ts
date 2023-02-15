import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../shared/category.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryName: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
  }

  private addCategory(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        const newCategory = new Category();
        newCategory.id = categories.length + 1;
        newCategory.name = this.categoryName;
        this.categoryService.saveCategory(newCategory).subscribe();
      }
    );
  }
}
