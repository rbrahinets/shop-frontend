import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
import {AdminNumberValidator} from '../../shared/validators/admin-number.validator';

@Component({
  selector: 'shop-admin-number-delete',
  templateUrl: './admin-number-delete.component.html',
  styleUrls: ['./admin-number-delete.component.css']
})
export class AdminNumberDeleteComponent implements OnInit {
  adminNumber: string;
  private adminsNumbers: AdminNumberDto[];

  constructor(
    private adminService: AdminService,
    private validator: AdminNumberValidator
  ) {
  }

  ngOnInit(): void {
    this.setAdminNumbers();
  }

  private setAdminNumbers(): void {
    this.adminService.getAdminsNumbers().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminsNumbers = adminNumbers
    );
  }

  private isValidAdminNumber(): boolean {
    return this.validator.validate(
      this.adminNumber,
      this.adminsNumbers,
      true
    );
  }
}
