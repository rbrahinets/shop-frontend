import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../users/shared/admin.service';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';

@Component({
  selector: 'shop-admin-number-delete',
  templateUrl: './admin-number-delete.component.html',
  styleUrls: ['./admin-number-delete.component.css']
})
export class AdminNumberDeleteComponent implements OnInit {
  private adminsNumbers: AdminNumberDto[];

  constructor(
    private adminService: AdminService,
  ) {
  }

  ngOnInit(): void {
  }

  private setAdminNumbers(): void {
    this.adminService.getAdminsNumbers().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminsNumbers = adminNumbers
    );
  }
}
