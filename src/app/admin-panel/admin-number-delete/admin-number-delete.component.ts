import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {UserService} from '../../users/shared/user.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
import {User} from '../../users/shared/user.model';
import {NavigationService} from '../../shared/navigation.service';
import {AdminNumberValidator} from '../../shared/validators/admin-number.validator';

@Component({
  selector: 'shop-admin-number-delete',
  templateUrl: './admin-number-delete.component.html',
  styleUrls: ['./admin-number-delete.component.css']
})
export class AdminNumberDeleteComponent implements OnInit {
  adminNumber: string;
  private adminsNumbers: AdminNumberDto[];
  private users: User[];

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private navigation: NavigationService,
    private validator: AdminNumberValidator
  ) {
  }

  ngOnInit(): void {
    this.setAdminNumbers();
    this.setUsers();
  }

  onDelete(): void {
    if (!this.isValidAdminNumber()) {
      return;
    }

    this.deleteAdminNumber();
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/admin-panel');
  }

  private setAdminNumbers(): void {
    this.adminService.findAll().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminsNumbers = adminNumbers
    );
  }

  private setUsers(): void {
    this.userService.findAll().subscribe(
      (users: User[]) => this.users = users
    );
  }

  private isValidAdminNumber(): boolean {
    return this.validator.validate(
      this.adminNumber,
      this.adminsNumbers,
      this.users
    );
  }

  private deleteAdminNumber(): void {
    for (const adminNumber of this.adminsNumbers) {
      if (adminNumber.number === this.adminNumber) {
        this.adminService.delete(adminNumber);
        break;
      }
    }

    this.navigation.goToEndpoint('/admin-panel', true);
  }
}
