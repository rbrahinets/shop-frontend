import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shop-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryName: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
