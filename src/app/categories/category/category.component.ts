import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../shared/category.model';

@Component({
  selector: 'shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;

  constructor() {
  }

  ngOnInit(): void {
  }
}
