import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RemoveUnwantedTextPipe } from './_helpers/remove-unwanted-text.pipe';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponent, 
    HomeComponent,
    RemoveUnwantedTextPipe,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
