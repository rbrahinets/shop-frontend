import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
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

  constructor(
    private router: Router,
    private adminService: AdminService,
    private navigation: NavigationService,
    private validator: AdminNumberValidator
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setAdminNumbers();
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

  private deleteAdminNumber(): void {
    for (const adminNumber of this.adminsNumbers) {
      if (adminNumber.number === this.adminNumber) {
        this.adminService.deleteAdminNumber(adminNumber);
        break;
      }
    }

    this.navigation.goToEndpoint('/admin-panel', true);
  }
}
