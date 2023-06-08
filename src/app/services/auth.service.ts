import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider());
  }

  signUpWithEmailAndPassword(user: { email: string; password: string }) {
    return this.firebaseAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  signInWithEmailAndPassword(user: { email: string; password: string }) {
    return this.firebaseAuth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }
}
