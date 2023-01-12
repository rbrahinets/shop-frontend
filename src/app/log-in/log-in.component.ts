import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LogInDto} from './shared/log-in.dto';
import {LogInConfig} from './shared/log-in.config';
import {UserService} from '../users/shared/user.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'shop-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Output() onLogIn: EventEmitter<LogInDto> = new EventEmitter();
  login: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        for (const user of users) {
          if (
            (this.login === user.email || this.login === user.phone)
            && this.password === user.password
          ) {
            LogInConfig.userId = user.id;
            HeaderComponent._logged = !HeaderComponent._logged;
            this.router.navigate(['/']).then(() => {});
          }
        }
      }
    );
  }
}
