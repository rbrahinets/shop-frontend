import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Shop';
  logged: boolean;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    let userId: number = Number(Cookie.get('userId'));
    this.logged = userId > 0;
  }

  onToggleLogOut(): void {
    Cookie.set('userId', '0');
    this.logged = !this.logged;
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
