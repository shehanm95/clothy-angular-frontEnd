import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  deleteUser(id: number) {
    console.log("Deleting user with ID:", id);
    return this.http.delete(`${MainUrl}/delete/${id}`)
      .subscribe(
        () => {
          console.log(`User with ID ${id} deleted successfully`);
          // Optionally: clear any user data if needed
          // this.authService.clearUser();
        },
        (error) => {
          console.error(`Error deleting user with ID ${id}:`, error);
        }
      );
  }
  getAllUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${MainUrl}/all`)
  }
  registerUser(registerFrom: any): Observable<AppUser> {
    return this.http.post<AppUser>(`${MainUrl}/saveUser`, registerFrom);
  }


  MainUrl = MainUrl;
  public getUser(username: string, password: string): Observable<AppUser> {
    // Prepare the payload
    const payload = { username, password };

    // Send a POST request to authenticate the user
    return this.http.post<AppUser>(`${MainUrl}/authUser`, payload);
  }


  getUserById(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(`${MainUrl}/get/${id}`);
  }

  updateUser(user: AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(`${MainUrl}/update/${user.id}`, user);
  }



}

export interface AppUser {
  id: number,
  username: string,
  email: string,
  fullName: string
  password: string,
  role: string,
  cartId: number
}

export const MainUrl = "http://localhost:8080";

