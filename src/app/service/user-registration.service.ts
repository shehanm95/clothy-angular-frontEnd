import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  registerUser(registerFrom: any): Observable<AppUser> {
    return this.http.post<AppUser>(`${MainUrl}/saveUser`, registerFrom);
  }


  constructor(private http: HttpClient,) { }
  MainUrl = MainUrl;
  public getUser(username: string, password: string): Observable<AppUser> {
    // Prepare the payload
    const payload = { username, password };

    // Send a POST request to authenticate the user
    return this.http.post<AppUser>(`${MainUrl}/authUser`, payload);
  }



}

export interface AppUser {
  id: number,
  username: string,
  email: string,
  fullName: string
  password: string,
}

export const MainUrl = "http://localhost:8080";

