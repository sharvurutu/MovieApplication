import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from './services/search.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Movie Cruiser';

  constructor(private searchService: SearchService, private router: Router, private location:Location) {}

  searchQuery: string;



  navigateTo() {
    const link = ['/search-results'];
    this.router.navigate(link);
  }

  public search() {
  console.log(this.searchQuery)
    this.searchService.find(this.searchQuery).then(response => {
      //this.searchService.sharedSearchResult = Observable.of(response.results);
      this.searchService.onSearch(response.results);
      this.navigateTo();
    });
  }
}
