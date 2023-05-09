import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {UserService} from '../../users/shared/user.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
import {User} from '../../users/shared/user.model';
import {NavigationService} from '../../shared/navigation.service';
import {AdminNumberValidator} from '../../shared/validators/admin-number.validator';

@Component({
  selector: 'shop-admin-number-add',
  templateUrl: './admin-number-add.component.html',
  styleUrls: ['./admin-number-add.component.css']
})
export class AdminNumberAddComponent implements OnInit {
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

  onAdd(): void {
    if (!this.isValidAdminNumber()) {
      return;
    }

    this.addAdminNumber();
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
      this.users,
      true
    );
  }

  private addAdminNumber(): void {
    const adminNumbersDto = new AdminNumberDto();
    adminNumbersDto.id = this.adminsNumbers.length + 1;
    adminNumbersDto.number = this.adminNumber;
    this.adminService.save(adminNumbersDto).subscribe(
      () => this.navigation.goToEndpoint('/admin-panel', true)
    );
  }
}
