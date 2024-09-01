import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../_interfaces/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string = environment.apiBaseUrl + 'news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/get-news`);
  }

  getNewsByType(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/get-news-by/${type}`);
  }

  splitNews(news: Article[], percentage: number = 0.65): { mainNews: Article[], randomNews: Article[] } {
    const splitIndex = Math.floor(news.length * percentage);
    return {
      mainNews: news.slice(0, splitIndex),
      randomNews: news.slice(splitIndex)
    };
  }              
}

