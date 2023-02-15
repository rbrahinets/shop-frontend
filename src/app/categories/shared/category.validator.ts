import {Injectable} from '@angular/core';
import {CategoryNameValidator} from '../../shared/validators/category-name.validator';
import {CategoryDto} from './category.dto';
import {Category} from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryValidator {
  constructor(
    private categoryNameValidator: CategoryNameValidator
  ) {
  }

  validate(
    category: CategoryDto,
    categories: Category[]
  ): boolean {
    return this.categoryNameValidator.validate(
      category.name,
      categories
    );
  }
}
