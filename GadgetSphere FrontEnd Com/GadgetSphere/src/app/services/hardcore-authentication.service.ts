import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardcoreAuthenticationService {

  constructor(private http: HttpClient) { }

  // Check if user is logged in
  public isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('userId');
    return !(user == null);
  }

  // Logout
  public logout(): void {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('multiProduct');
  }

  // User login API
  public authenticate(emailId: string, password: string): Observable<any> {
    console.log(password);
    console.log(emailId);
    return this.http.get(`http://localhost:8089/user/findlogin/${emailId}/${password}`);
  }

  // Admin login
  public adminauthenticate(username: string, password: string): boolean {
    if (username.trim() === "Admin" && password.trim() === "Admin@333") {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    } else {
      return false;
    }
  }

  // Get user by ID
  public getUserById(userId: string): Observable<any> {
    return this.http.get(`http://localhost:8089/user/userid/${userId}`);
  }
}
