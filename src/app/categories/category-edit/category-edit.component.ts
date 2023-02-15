import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../shared/category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  newCategoryName: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
    this.category = new Category();
  }

  ngOnInit(): void {
    this.setCurrentCategory();
  }

  onUpdate(): void {
    this.updateCategoryData();
    this.navigation.goToEndpoint('/categories', true);
  }

  onClickCancel(): void {
    this.navigation.goToEndpoint(`/categories/${this.navigation.getCurrentPathId()}`);
  }

  private setCurrentCategory() {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        for (const category of categories) {
          if (category.id === this.navigation.getCurrentPathId()) {
            this.category = category;
          }
        }
      }
    );
  }

  private updateCategoryData(): void {
    this.category.name = this.newCategoryName;
    this.categoryService.updateCategory(this.category).subscribe();
  }
}
