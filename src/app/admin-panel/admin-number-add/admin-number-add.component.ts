import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
@Component({
  selector: 'shop-admin-number-add',
  templateUrl: './admin-number-add.component.html',
  styleUrls: ['./admin-number-add.component.css']
})
export class AdminNumberAddComponent implements OnInit {
  private adminNumbers: AdminNumberDto[];

  constructor(
    private adminService: AdminService,
  ) {
  }

  ngOnInit(): void {
  }

  private setAdminNumbers(): void {
    this.adminService.getAdminsNumbers().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminNumbers = adminNumbers
    );
  }
}
