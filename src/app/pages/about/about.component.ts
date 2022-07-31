import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MessageService } from '../../services/message.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  task: Task[] = [];
  mensaje: FormGroup;
  admin: boolean = false;
  constructor(
    private formbuilder: FormBuilder,
    private message: MessageService
  ) {
    this.mensaje = this.formbuilder.group({
      email: [''],
      mensaje: [''],
    });
  }

  ngOnInit(): void {}

  onMensaje() {
    this.message.sendMensaje(this.mensaje.value).subscribe(() => {
      this.mensaje.reset();
    });
  }
}
