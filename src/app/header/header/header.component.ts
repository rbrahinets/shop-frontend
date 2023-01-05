import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Shop';

  constructor() {
  }

  ngOnInit(): void {
  }

  goToPage(link: string): void {
    alert(`Go to ${link}`);
  }
}
