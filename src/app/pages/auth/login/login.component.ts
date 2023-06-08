import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) {}

  username!: string;
  password!: string;

  login() {
    // Perform login logic here
    console.log('Logged in');
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
