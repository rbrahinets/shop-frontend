import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shop-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryName: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
