import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../_interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  url: string = environment.apiBaseUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();


  login(model: any){
    return this.http.post<User>(this.url + 'account/login', model).pipe(
      map((respone: User) => {
        const user = respone;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.router.navigate(['/home']);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.url + 'account/register', model).pipe(
      map((response: any) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.router.navigate(['/home']);
        }
      })
    )
  }

  loadCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.currentUserSource.next(user);
    }
  }
  

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigate(['/home']);
  }

}
