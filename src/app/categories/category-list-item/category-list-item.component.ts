import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.css']
})
export class CategoryListItemComponent implements OnInit {
  @Input() category: Category;

  constructor() {
  }

  ngOnInit(): void {
  }
}
