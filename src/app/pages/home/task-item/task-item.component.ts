import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  admin: boolean = false;

  faTimes = faTimes;

  constructor() {
    this.admin = JSON.parse(sessionStorage.getItem('islogged') || 'false');
  }

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
