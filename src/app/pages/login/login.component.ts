import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (user: User) => {
          console.log(user)
        },
        (error) => {
          console.log(error.message)
        })

    this.router.navigate(['/interno'])
  }
}
