import {Component, OnInit} from '@angular/core';
import {Profile} from "../shared/profile.model";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'shop-profiles',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserForProfile(2).subscribe(
      (profile) => this.profile = profile
    );
  }
}
