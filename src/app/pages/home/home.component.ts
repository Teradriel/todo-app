import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TASKS } from 'src/app/interfaces/mock-tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {}

  addTask() {
    console.log('add task');
  }
}
