import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7018/api/auth';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/login`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
