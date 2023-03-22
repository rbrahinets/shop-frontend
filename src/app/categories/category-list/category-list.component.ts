import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/category.service';
import {Category} from '../shared/category.model';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  userRole: string;

  constructor(
    private categoryService: CategoryService,
    private navigation: NavigationService
  ) {
    this.userRole = LoggedUserService.getRoleOfUser();
  }

  ngOnInit(): void {
    this.setCategories();
  }

  onAddNewCategory(): void {
    this.navigation.goToEndpoint('/categories/add');
  }

  onDeleteCategory(): void {
    this.navigation.goToEndpoint('/categories/delete');
  }

  private setCategories(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }
}
