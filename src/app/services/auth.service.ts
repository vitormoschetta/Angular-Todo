import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataResult } from 'src/app/models/dataResult';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserResult } from '../models/userResult';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  USER_STORE: string = 'currentUser';
  USER_TOKEN_STORE: string = 'tokenUser'
  baseUrl: string = environment.baseUrl
  userResult!: UserResult;
  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;

  constructor(
    private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.USER_STORE) || ''))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  login(email: string, password: string): Observable<UserResult> {
    return this.http.post<UserResult>(`${this.baseUrl}/login`, { email, password })
      .pipe(map(data => {
        this.userResult = data
        this.setSession()
        this.currentUserSubject.next(data.user)
        return data
      }))
  }

  setSession() {
    localStorage.setItem(this.USER_STORE, JSON.stringify(this.userResult.user))
    localStorage.setItem(this.USER_TOKEN_STORE, this.userResult.token)
  }

}
