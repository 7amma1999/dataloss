import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

/**
 * This class represents the lazy loaded IndexPageComponent.
 */
@Component({
  selector: 'app-sd-index-page',
  templateUrl: 'index-page.component.html',
  styleUrls: ['index-page.component.scss']
})
export class IndexPageComponent {

  constructor(public authService: AuthService,
              private router: Router) {}

  /**
   * navigate To roles
   */
  navigateTo(role) {
    this.authService.setCurrentUser(role);

    switch (role) {
      case 'Administrators':
        this.router.navigate(['/access-control-page']);
        break;
      case 'Managers':
        this.router.navigate(['/incident-list-page']);
        break;
      case 'Regular employees':
        this.router.navigate(['/incident-list-page']);
        break;
    }
  }
}
