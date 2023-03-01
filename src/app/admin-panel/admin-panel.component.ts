import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';

@Component({
  selector: 'shop-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
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
