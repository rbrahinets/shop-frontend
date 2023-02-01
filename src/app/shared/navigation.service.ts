import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private router: Router
  ) {
  }

  goToEndpoint(endpoint: string) {
    if (endpoint) {
      this.router.navigate([endpoint]).then();
    }
  }
}
