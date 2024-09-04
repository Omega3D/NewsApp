import { Component, OnInit } from '@angular/core';
import { Article } from '../_interfaces/article';
import { NewsService } from '../_services/news.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainNews: Article[] = [];
  randomNews: Article[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private service: NewsService, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.loadNews(this.currentPage);
  }

  loadNews(pageNumber: number) {
    this.service.getNews(pageNumber, this.pageSize).subscribe(
      (response) => {
        const { totalItems, articles } = response;
        
        const { mainNews, randomNews } = this.service.splitNews(articles);
  
        this.mainNews = mainNews;
        this.randomNews = randomNews;
        this.totalItems = totalItems;
      },
      (error) => {
        console.error('Error fetching news:', error.message);
      }
    );
  }
  
  

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loadNews(pageNumber);
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
