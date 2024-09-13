import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService ){ }

  register(){
    this.authService.register(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/'),
      error: error => this.toastr.error(error)
    });
  }

}
