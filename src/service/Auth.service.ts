import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Login error: ", error);
      throw error;
    }
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getUser() {
    return this.afAuth.authState;
  }
}