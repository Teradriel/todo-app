import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  mensaje: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private idbService: NgxIndexedDBService
  ) {
    this.mensaje = this.formbuilder.group({
      email: [''],
      mensaje: [''],
    });
  }

  ngOnInit(): void {}

  onMensaje() {
    this.idbService.add('messages', this.mensaje).subscribe(() => {
      console.log('mensaje guardado');
    });
  }
}
