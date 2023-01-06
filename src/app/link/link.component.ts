import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
