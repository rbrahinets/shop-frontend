import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Category} from '../shared/category.model';
import {CategoryValidator} from '../shared/category.validator';
import {CategoryDto} from '../shared/category.dto';

@Component({
  selector: 'shop-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryName: string;
  private categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private navigation: NavigationService,
    private validator: CategoryValidator
  ) {
  }

  ngOnInit(): void {
    this.setCategories();
  }

  onAdd(): void {
    if (!this.isValidCategoryData()) {
      return;
    }

    this.addCategory();
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/categories');
  }

  private setCategories(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }

  private isValidCategoryData(): boolean {
    return this.validator.validate(
      new CategoryDto(this.categoryName),
      this.categories
    );
  }

  private addCategory(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => {
        const newCategory = new Category();
        newCategory.id = categories.length + 1;
        newCategory.name = this.categoryName;
        this.categoryService.save(newCategory).subscribe();
        this.navigation.goToEndpoint('/categories', true);
      }
    );
  }
}
