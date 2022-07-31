import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { TASKS } from '../../../interfaces/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];

  admin: boolean = false;

  faTimes = faTimes;

  constructor() {
    this.admin = JSON.parse(sessionStorage.getItem('islogged') || 'false');
  }

  ngOnInit(): void {}
}
