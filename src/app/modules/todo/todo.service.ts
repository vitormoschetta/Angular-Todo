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
    return this.http.get<Todo[]>(`${environment.baseUrl}/todo`)
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${environment.baseUrl}/todo/${id}`)
  }

  add(title: string): Observable<Todo> {
    return this.http.post<Todo>(`${environment.baseUrl}/todo`, { title: title, done: false })
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/todo/${id}`)    
  }

  update(todo: Todo): Observable<void> {
    return this.http.put<void>(`${environment.baseUrl}/todo/${todo.id}`, todo) 
  }
}
