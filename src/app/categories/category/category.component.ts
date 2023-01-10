import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../shared/category.model";

@Component({
  selector: 'shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  @Output() onClickLink: EventEmitter<Category> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(category: Category): void {
    this.onClickLink.emit(category);
  }
}
