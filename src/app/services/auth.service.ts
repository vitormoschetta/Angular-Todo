import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResult } from '../models/authResult';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  USER_STORE: string = 'currentUser';
  baseUrl: string = environment.baseUrl
  private currentUserSubject!: BehaviorSubject<User | null>;
  public currentUser!: Observable<User | null>

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    let user = JSON.parse(localStorageService.get(this.USER_STORE))
    this.currentUserSubject = new BehaviorSubject<User | null>(user)
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value
  }

  getUser(): Observable<User> {
    return this.localStorageService.get(this.USER_STORE)
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<AuthResult>(`${this.baseUrl}/login`, { email, password })
      .pipe(map(data => {
        console.log(data)
        const user = new User(data.user.email, data.user.password, data.user.username, data.accessToken)
        this.localStorageService.set(user, this.USER_STORE)
        this.currentUserSubject.next(user)
        return user
      }))
  }

  logout() {
    this.localStorageService.remove(this.USER_STORE)
    this.currentUserSubject.next(null)
  }


}
