import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.userRole = LoggedUserService.getRoleOfUser();
    this.navigationService = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setCategories();
  }

  onAddNewCategory(): void {
    this.navigationService.goToEndpoint('/categories/add');
  }

  private setCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }
}
