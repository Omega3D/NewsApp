import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  mainNews: Article[] = [];
  randomNews: Article[] = [];
  genre: string = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.genre = this.route.snapshot.data['genre'];
    this.fetchNewsByGenre(this.genre);
  }

  fetchNewsByGenre(genre: string) {
    this.newsService.getNewsByType(genre).subscribe((data: Article[]) => {
      const { mainNews, randomNews } = this.newsService.splitNews(data);
      this.mainNews = mainNews;
      this.randomNews = randomNews;
    });
  }
}
