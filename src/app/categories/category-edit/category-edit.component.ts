import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../shared/category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Category} from '../shared/category.model';
import {CategoryValidator} from '../shared/category.validator';
import {CategoryDto} from '../shared/category.dto';

@Component({
  selector: 'shop-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  categoryName: string;
  private categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private navigation: NavigationService,
    private validator: CategoryValidator
  ) {
    this.navigation = new NavigationService(this.router);
    this.category = new Category();
  }

  ngOnInit(): void {
    this.setCategories();
  }

  onUpdate(): void {
    if (!this.isValidCategoryData()) {
      return;
    }

    this.updateCategoryData();
    this.navigation.goToEndpoint('/categories', true);
  }

  onCancel(): void {
    this.navigation.goToEndpoint(`/categories/${this.navigation.getCurrentPathId()}`);
  }

  private setCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        this.setCurrentCategory(categories);
      }
    );
  }

  private setCurrentCategory(categories: Category[]): void {
    for (const category of categories) {
      if (category.id === this.navigation.getCurrentPathId()) {
        this.category = category;
        this.categoryName = category.name;
      }
    }
  }

  private isValidCategoryData(): boolean {
    return this.validator.validate(
      new CategoryDto(this.categoryName),
      this.categories
    );
  }

  private updateCategoryData(): void {
    this.category.name = this.categoryName;
    this.categoryService.updateCategory(this.category).subscribe();
  }
}
