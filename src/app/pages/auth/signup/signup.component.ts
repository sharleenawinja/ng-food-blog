import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {}

  signupForm!: FormGroup;
  submitted = false;
  email!: string;
  password!: string;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUpWithEmailAndPassword() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    const user = { email: this.email, password: this.password };
    this.authservice
      .signUpWithEmailAndPassword(user)
      .then((response) => {
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
