import {Injectable} from '@angular/core';
import {Category} from '../../categories/shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class SortCategoriesService {
  sortByNameAsc(categories: Category[]): Category[] {
    return categories.sort(
      (
        category1: Category,
        category2: Category
      ) => {
        if (category1.name > category2.name) {
          return 1;
        } else if (category1.name < category2.name) {
          return -1;
        }

        return 0;
      }
    );
  }
}
