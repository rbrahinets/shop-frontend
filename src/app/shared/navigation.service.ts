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

  isEqualsRoutes(route: string) {
    return this.router.url === route;
  }

  goToEndpoint(
    endpoint: string,
    reload: boolean = false
  ): void {
    if (reload && endpoint) {
      this.router.navigate([endpoint])
        .then(() => window.location.reload());
    } else if (endpoint) {
      this.router.navigate([endpoint]).then();
    }
  }

  getCurrentPathId(): number {
    if (Number(this.getCurrentPath()[this.getCurrentPath().length - 1])) {
      return Number(this.getCurrentPath()[this.getCurrentPath().length - 1]);
    } else {
      return Number(this.getCurrentPath()[this.getCurrentPath().length - 2]);
    }
  }

  private getCurrentPath(): string[] {
    return (this.router.url as string).split('/');
  }
}
