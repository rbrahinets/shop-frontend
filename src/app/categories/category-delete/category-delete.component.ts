import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../shared/category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryName: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteCategory();
    this.navigation.goToEndpoint('/categories', true);
  }

  onClickCancel(): void {
    this.navigation.goToEndpoint('/categories');
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
