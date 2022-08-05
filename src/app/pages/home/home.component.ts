import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private idbService: NgxIndexedDBService) {}

  ngOnInit(): void {
    this.idbService.getAll('tasks').subscribe((tasks) => {
      this.tasks = tasks as Task[];
    });
  }

  deleteTask(task: Task) {
    this.idbService.delete('tasks', task.id!).subscribe();
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.idbService.update('tasks', task).subscribe();
  }
}
