import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onToggleCompleted: EventEmitter<Task> = new EventEmitter<Task>();

  admin: boolean = false;

  constructor(private idbService: NgxIndexedDBService) {
    this.admin = JSON.parse(sessionStorage.getItem('islogged') || 'false');
  }

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.idbService.delete('tasks', task.id!).subscribe();
    location.reload();
  }

  onToggle(task: Task) {
    this.onToggleCompleted.emit(task);
  }
}
