import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent {

  currentUser!: User | null

  constructor(private authService: AuthService, private router: Router,) {
    this.authService.currentUser.subscribe(x => this.currentUser = x)
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
