import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private _moviesService: MoviesService, private _router: Router) { }

 public comment;
 public movies;
 getMovies () {
   this._moviesService.getWatchlistMovies().subscribe(data => {
     console.log(data)
     this.movies = data;
   });
 }

 goToDetail(id: number) {
   const link = ['/movie', id];
   this._router.navigate(link);
 }

upDateComment(id: number) {
  this._moviesService.updateMovieComments(id, this.comment);
}
  ngOnInit() {
   this.getMovies();
  }

}
