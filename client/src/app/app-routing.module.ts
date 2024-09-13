import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: NewsComponent, data: { genre: 'sports' } },
  { path: 'politics', component: NewsComponent, data: { genre: 'politics' } },
  { path: 'travel', component: NewsComponent, data: { genre: 'travel' } },
  { path: 'business', component: NewsComponent, data: { genre: 'business' } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
