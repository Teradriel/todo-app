import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private ruta: Router) {}

  login(credentials: {
    username: string;
    password: string;
  }): Observable<boolean> {
    if (credentials.username === 'Admin' && credentials.password === 'root') {
      alert('Welcome');
      this.logged.next(true);
      sessionStorage.setItem(
        'currentUser',
        JSON.stringify(credentials.username)
      );
      this.ruta.navigate(['/home']);
      return this.logged;
    } else {
      alert('Invalid credentials');
      this.logged.next(false);
      return this.logged;
    }
  }

  logout(): Observable<boolean> {
    this.logged.next(false);
    this.ruta.navigate(['/home']);
    return this.logged;
  }
}
