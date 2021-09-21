import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { UserResult } from 'src/app/models/userResult';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  dataResult!: DataResult;
  submitted = false

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

  }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit() {
    this.submitted = true
    if (this.form.invalid)
      return;

    this.authService
      .login(this.f.email.value, this.f.password.value)
      .subscribe(
        data => {          
          console.log(data)        
        },
        error => {
          console.log('erro na comunicacao')
        })
  }

  createForm() {
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  get f() { return this.form.controls; }

}
