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

  goToEndpoint(
    endpoint: string,
    reload: boolean = false
  ) {
    if (reload && endpoint) {
      this.router.navigate([endpoint])
        .then(() => window.location.reload());
    } else if (endpoint) {
      this.router.navigate([endpoint]).then();
    }
  }
}
