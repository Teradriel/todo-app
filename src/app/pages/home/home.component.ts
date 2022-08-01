import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  addForm: FormGroup;

  faCalendar = faCalendar;
  constructor(
    private taskService: TaskService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      task: '',
      date: new Date(),
    });
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addTask() {
    this.taskService.addTask(this.addForm.value);
    this.addForm.reset();
    this.modalService.dismissAll();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleCompleted(task: Task) {
    this.taskService.toggleCompleted(task).subscribe(() => {
      task.completed = !task.completed;
    });
  }
}
