import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  admin: boolean = JSON.parse(sessionStorage.getItem('islogged') || 'false');

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.login = this.fb.group({
      usuario: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.auth.login(this.login.value).subscribe((res) => {
      if (res) {
        sessionStorage.setItem('islogged', JSON.stringify(res));
        this.admin = true;
      } else {
        sessionStorage.setItem('islogged', JSON.stringify(res));
        this.admin = false;
      }
    });
  }

  /* TODO: Implementar amdin en header!!!! */

  Logout() {
    this.auth.logout().subscribe((res) => {
      sessionStorage.setItem('islogged', JSON.stringify(res));
      sessionStorage.clear();
    });
  }
}
