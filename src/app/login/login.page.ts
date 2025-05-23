import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }

  ngOnInit() {}

async login() {
  const { email, password } = this.loginForm.value;
  try {
    await this.afAuth.signInWithEmailAndPassword(email, password);


    if (email === 'admin@gmail.com') {

      this.router.navigateByUrl('/socio');
    } else {
      this.router.navigateByUrl('/home');
    }

  } catch (error) {
    if (error instanceof Error) {
      alert('Error al iniciar sesión: ' + error.message);
    } else {
      alert('Error al iniciar sesión: ' + JSON.stringify(error));
    }
  }
}

  async loginWithGoogle() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log('Usuario logueado:', result.user);
      this.router.navigateByUrl('/home');
    } catch (err) {
      console.error('Error al iniciar sesión con Google', err);
    }
  }
  
}
