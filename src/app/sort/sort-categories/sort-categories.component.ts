import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../categories/shared/category.model';
import {SortCategoriesService} from '../shared/sort-categories.service';

@Component({
  selector: 'shop-categories-sort',
  templateUrl: './sort-categories.component.html',
  styleUrls: ['./sort-categories.component.css']
})
export class SortCategoriesComponent implements OnInit {
  @Input() categories: Category[];
  sortTypes: string[];

  constructor(
    private sortCategoriesService: SortCategoriesService
  ) {
    this.sortTypes = ['Name[A-Z]', 'Name[Z-A]'];
  }

  ngOnInit(): void {
  }

  sortCategories(typeSort: string): void {
    if (typeSort === this.sortTypes[0]) {
      this.categories = this.sortCategoriesService.sortByNameAsc(this.categories);
    } else if (typeSort === this.sortTypes[1]) {
      this.categories = this.sortCategoriesService.sortByNameDesc(this.categories);
    }
  }
}
