import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
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

  constructor(
    private adminService: AdminService,
    private navigation: NavigationService,
    private validator: AdminNumberValidator
  ) {
  }

  ngOnInit(): void {
    this.setAdminNumbers();
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
    this.adminService.getAdminsNumbers().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminsNumbers = adminNumbers
    );
  }

  private isValidAdminNumber(): boolean {
    return this.validator.validate(
      this.adminNumber,
      this.adminsNumbers
    );
  }

  private addAdminNumber(): void {
    const adminNumbersDto = new AdminNumberDto();
    adminNumbersDto.id = this.adminsNumbers.length + 1;
    adminNumbersDto.number = this.adminNumber;
    this.adminService.saveAdminNumber(adminNumbersDto).subscribe();
    this.navigation.goToEndpoint('/admin-panel', true);
  }
}
