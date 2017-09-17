import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Movie,  MOVIES } from '../Models/Movie';
import { Review, REVIEWS } from '../Models/Review';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[LoggingService]
})

export class MoviesComponent implements OnInit, OnDestroy {

  moviesColl = MOVIES;
  reviewsColl = REVIEWS;
  movies: Movie[] = [];
  reviews: Review[] = [];

  newMovieName = '';
  newDirectorName = '';
  newReleaseYear = '';

  newReviewerName = '';
  newComment = '';

  oddReviews =[1,3,5];
  evenNumbers=[2,4,6];
  onlyOdd=false;

  @Output() movieCreated = new EventEmitter < Movie[] > ();
  @Output() reviewCreated = new EventEmitter < Review[] > ();

  @ViewChild('movieNameInput') movieNameInput: ElementRef;
  constructor(private loggingService:LoggingService) {}


  ngOnInit() {
   }


  onAddMovie(movieInput) {
    this.movies.push({
      name: this.newMovieName,
      directorName: this.newDirectorName,
      releaseYear: this.newReleaseYear
    });
    this.movieCreated.emit(this.movies);
  }

  onAddMovieReview() {
    this.reviews.push({
      reviewer: this.newReviewerName,
      comments: this.newComment
    });
    this.reviewCreated.emit(this.reviews);
  }

  ngOnDestroy(){
    this.loggingService.logToConsole('ngOnDestroy called!');
  }
  removeComponent(){
    this.reviewsColl.splice(0,1);
  }
}
