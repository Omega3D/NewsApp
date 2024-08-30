import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Замінив styleUrl на styleUrls, щоб відповідало Angular конвенції
})
export class HomeComponent implements OnInit {
  mainNews: Article[] = [];
  randomNews: Article[] = [];
  
  constructor(private service: NewsService) {}

  ngOnInit() {
    this.service.getNews().subscribe(
      (response: Article[]) => {
        this.splitNews(response);
      },
      (error) => {
        console.error('Error fetching news:', error.message);
      }
    );
  }

  splitNews(news: Article[]) {
    const splitIndex = Math.floor(news.length * 0.65); // Розрахунок для 65% ширини
    this.mainNews = news.slice(0, splitIndex); // Основні новини
    this.randomNews = news.slice(splitIndex); // Рандомні новини
  }
}
