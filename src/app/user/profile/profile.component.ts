import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  auth = inject(AuthService);
  router = inject(Router)

  user: any; // You can create a specific interface for type safety


  constructor(private authService: AuthService) {
    this.user = authService.loadUserData()
  }


  logOut() {
    // Add your logout logic here
    console.log('Logging out...');
    localStorage.removeItem('currentUser'); // Remove user data from local storage
  }
}
