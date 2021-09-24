import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = ''
  password = ''
  errorMessage = ''

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.email === '' || this.password === '') {
      this.errorMessage = 'Informe email e senha!'
      return
    }

    this.authService.login(this.email, this.password).subscribe(
      (user: User) => {
        console.log(user)
      },
      (error) => {
        console.log(error.message)
      })

    this.router.navigate(['/todo'])
  }
}
