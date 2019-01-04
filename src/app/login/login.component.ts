import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  public user: string;
  public password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private layoutService: LayoutService
  ) { }

  onSubmit() {
    this.authService.login(this.user, this.password)
      .then(this.onSubmitSuccess.bind(this) , this.onSubmitFailure);
  }

  private onSubmitSuccess () {
    this.router.navigate(['/cars'])
    .then(
      () => this.layoutService.showSidebar()
    );
  }

  private onSubmitFailure () {
    console.log('Bad credentials');
  }
}
