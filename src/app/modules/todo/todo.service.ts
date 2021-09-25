import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.baseUrl}/todos`)
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${environment.baseUrl}/todos/${id}`)
  }

  add(title: string): Observable<Todo> {
    return this.http.post<Todo>(`${environment.baseUrl}/todos`, { title: title, done: false })
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/todos/${id}`)    
  }

  update(todo: Todo): Observable<void> {
    return this.http.put<void>(`${environment.baseUrl}/todos/${todo.id}`, todo) 
  }
}
