import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../shared/navigation.service';

@Component({
  selector: 'shop-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteUser(): void {
    this.navigation.goToEndpoint('/users/delete-user');
  }

  onAddAdminNumber(): void {
    this.navigation.goToEndpoint('/admin-panel/add-admin-number');
  }

  onDeleteAdminNumber(): void {
    this.navigation.goToEndpoint('/admin-panel/delete-admin-number');
  }
}
