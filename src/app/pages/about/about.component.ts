import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  message: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private idbService: NgxIndexedDBService
  ) {
    this.message = this.formbuilder.group({
      email: [''],
      message: [''],
    });
  }

  ngOnInit(): void {}

  onMessage() {
    this.idbService.add('messages', this.message.value).subscribe();
    this.message.reset();
  }
}
