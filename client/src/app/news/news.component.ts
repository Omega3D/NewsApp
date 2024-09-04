import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  mainNews: Article[] = [];
  randomNews: Article[] = [];
  genre: string = '';
  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.genre = this.route.snapshot.data['genre'];
    this.fetchNewsByGenre(this.genre, this.currentPage);
  }

  fetchNewsByGenre(genre: string, page: number) {
    this.newsService.getNewsByType(genre, page, this.pageSize).subscribe(
      (response: { totalItems: number, articles: Article[] }) => {
        const { mainNews, randomNews } = this.newsService.splitNews(response.articles);
        this.mainNews = mainNews;
        this.randomNews = randomNews;
        this.totalItems = response.totalItems;
      },
      (error) => {
        console.error('Error fetching news:', error.message);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchNewsByGenre(this.genre, page);
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  
}
