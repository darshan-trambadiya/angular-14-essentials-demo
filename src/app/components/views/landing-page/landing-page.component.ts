// external
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'perx-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
