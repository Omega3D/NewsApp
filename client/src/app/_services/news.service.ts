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

  getNews(pageNumber: number = 1, pageSize: number = 10): Observable<{ totalItems: number, articles: Article[] }> {
    return this.http.get<{ totalItems: number, articles: Article[] }>(`${this.url}/get-news?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  
  getNewsByType(type: string, pageNumber: number = 1, pageSize: number = 10): Observable<{ totalItems: number, articles: Article[] }> {
    return this.http.get<{ totalItems: number, articles: Article[] }>(`${this.url}/get-news-by/${type}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  splitNews(news: Article[] = []): { mainNews: Article[], randomNews: Article[] } {
    const splitIndex = Math.floor(news.length * 0.65);
    return {
      mainNews: news.slice(0, splitIndex),
      randomNews: news.slice(splitIndex)
    };
  }
  
}
