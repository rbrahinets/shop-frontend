import {Injectable} from '@angular/core';
import {Category} from '../../categories/shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryNameValidator {
  validate(
    categoryName: string,
    categories: Category[]
  ): boolean {
    return CategoryNameValidator.validateCategoryName(
      categoryName,
      categories
    );
  }

  private static validateCategoryName(
    categoryName: string,
    categories: Category[]
  ): boolean {
    if (!categoryName) {
      alert('You haven\'t entered a name of category');
      return false;
    } else if (CategoryNameValidator.isInvalidCategoryName(categoryName)) {
      alert('You have entered a short name of category');
      return false;
    } else if (!CategoryNameValidator.isUniqueCategoryName(
      categoryName,
      categories
    )) {
      alert('You have entered an existing name of category');
      return false;
    }

    return true;
  }

  private static isInvalidCategoryName(categoryName: string): boolean {
    return categoryName.length < 2;
  }

  private static isUniqueCategoryName(
    categoryName: string,
    categories: Category[]
  ): boolean {
    if (!categories) {
      return true;
    }

    for (const category of categories) {
      if (category.name === categoryName) {
        return false;
      }
    }

    return true;
  }
}
