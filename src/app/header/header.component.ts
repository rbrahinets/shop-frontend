import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Shop';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
