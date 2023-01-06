import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shop-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: string[] = [
    'link1',
    'link2',
    'link3',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  click(link): void {
    alert(`Forward to ${link}`);
  }
}
