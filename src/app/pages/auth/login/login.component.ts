import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {}

  loginForm!: FormGroup;
  submitted = false;
  email: string = '';
  password: string = '';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logInWithEmailAndPassword() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const user = { email: this.email, password: this.password };
    this.authservice
      .signInWithEmailAndPassword(user)
      .then((response) => {
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  signInWithGoogle() {
    this.authservice
      .signInWithGoogle()
      .then((response) => {
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
