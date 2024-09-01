import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainNews: Article[] = [];
  randomNews: Article[] = [];
  
  constructor(private service: NewsService) {}

  ngOnInit() {
    this.service.getNews().subscribe(
      (response: Article[]) => {
        const { mainNews, randomNews } = this.service.splitNews(response);
        this.mainNews = mainNews;
        this.randomNews = randomNews;
      },
      (error) => {
        console.error('Error fetching news:', error.message);
      }
    );
  }
}
