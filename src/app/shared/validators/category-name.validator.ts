import {Injectable} from '@angular/core';
import {Category} from '../../categories/shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryNameValidator {
  validate(
    categoryName: string,
    categories: Category[],
    isDelete: boolean = false
  ): boolean {
    return CategoryNameValidator.validateCategoryName(
      categoryName,
      categories,
      isDelete
    );
  }

  private static validateCategoryName(
    categoryName: string,
    categories: Category[],
    isDelete: boolean = false
  ): boolean {
    if (!categoryName) {
      alert('You haven\'t entered a name of category');
      return false;
    } else if (CategoryNameValidator.isInvalidCategoryName(categoryName)) {
      alert('You have entered a short name of category');
      return false;
    } else if (
      CategoryNameValidator.isExistingCategoryName(
        categoryName,
        categories
      )
      && !isDelete
    ) {
      alert('You have entered an existing name of category');
      return false;
    } else if (
      !CategoryNameValidator.isExistingCategoryName(
        categoryName,
        categories
      )
      && isDelete
    ) {
      alert('You have entered a non-existent name of category');
      return false;
    }

    return true;
  }

  private static isInvalidCategoryName(categoryName: string): boolean {
    return categoryName.length < 2;
  }

  private static isExistingCategoryName(
    categoryName: string,
    categories: Category[]
  ): boolean {
    if (!categories) {
      return false;
    }

    for (const category of categories) {
      if (category.name === categoryName) {
        return true;
      }
    }

    return false;
  }
}
