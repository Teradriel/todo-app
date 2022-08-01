import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    return of(task);

    /*TODO: add task to the list*/
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
