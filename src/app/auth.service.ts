import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // JSON server base URL

  constructor(private http: HttpClient) {}

  // Login method
  login(login: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(u => u.login === login && u.password === password);
        if (user) {
          localStorage.setItem('token', user.token); // Store token in localStorage
          return true;
        }
        return false;
      })
    );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('token'); // Remove token from localStorage
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
