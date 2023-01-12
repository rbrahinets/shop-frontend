import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LogInDto} from './shared/log-in.dto';
import {UserService} from '../users/shared/user.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';

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
            Cookie.set('userId', String(user.id));
            this.router.navigate(['/'])
              .then(() => window.location.reload());
          }
        }
      }
    );
  }
}
