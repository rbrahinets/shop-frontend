import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imageBytes: any;
  @Input() alt: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
