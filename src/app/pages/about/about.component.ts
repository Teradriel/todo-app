import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  task: Task[] = [];
  login: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.login = this.formbuilder.group({
      email: [''],
      mensaje: [''],
    });
  }

  ngOnInit(): void {}

  onMensaje() {
    alert('Hola');
    this.login.reset();
  }
}
