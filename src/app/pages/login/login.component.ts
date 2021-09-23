import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  email: string = ""
  password: string = ""

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((user: User) => {
      console.log(user)
    }, (error) => console.log(error.message))

    this.router.navigate(['/interno'])
  }
}
