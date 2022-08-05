import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private idbService: NgxIndexedDBService
  ) {
    this.addForm = this.fb.group({
      title: '',
      date: '',
      completed: false,
    });
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addTask() {
    if (
      this.addForm.value.task === '' ||
      this.addForm.value.date === '' ||
      this.addForm.value.task === null ||
      this.addForm.value.date === null
    ) {
      alert('Please fill all the fields');
      this.addForm.reset();
    } else {
      this.idbService.add('tasks', this.addForm.value).subscribe();
      this.addForm.reset();
      location.reload();
      this.modalService.dismissAll();
    }
  }
}
