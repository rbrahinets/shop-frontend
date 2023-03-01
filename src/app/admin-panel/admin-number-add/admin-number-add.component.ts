import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-admin-number-add',
  templateUrl: './admin-number-add.component.html',
  styleUrls: ['./admin-number-add.component.css']
})
export class AdminNumberAddComponent implements OnInit {
  adminNumber: string;
  private adminNumbers: AdminNumberDto[];

  constructor(
    private router: Router,
    private adminService: AdminService,
    private navigation: NavigationService,
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setAdminNumbers();
  }

  private setAdminNumbers(): void {
    this.adminService.getAdminsNumbers().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminNumbers = adminNumbers
    );
  }

  private addAdminNumber(): void {
    const adminNumbersDto = new AdminNumberDto();
    adminNumbersDto.id = this.adminNumbers.length + 1;
    adminNumbersDto.number = this.adminNumber;
    this.adminService.saveAdminNumber(adminNumbersDto).subscribe();
    this.navigation.goToEndpoint('/admin-panel', true);
  }
}
