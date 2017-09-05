import { Component, OnInit } from '@angular/core';
import { Movie, MOVIES } from '../Models/Movie';
import { Review,REVIEWS } from '../Models/Review';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 moviesColl=MOVIES;
 reviewsColl=REVIEWS;

  constructor() { 
   // console.log(this.moviesColl);
  // console.log(this.reviewsColl);
  }

  ngOnInit() {
  }

}
