import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService){ }

  login(){
    this.authService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('home'),
      error: error => this.toastr.error(error)
    });
  }
}
