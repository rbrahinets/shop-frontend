import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogInConfig} from '../log-in/shared/log-in.config';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Shop';
  static _logged: boolean = LogInConfig.userId > 0;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onToggleLogOut(): void {
    LogInConfig.userId = 0;
    this.logged = !this.logged;
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  get logged(): boolean {
    return HeaderComponent._logged;
  }

  set logged(value: boolean) {
    HeaderComponent._logged = value;
  }
}
