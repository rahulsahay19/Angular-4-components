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

import {
  Movie,
  MOVIES
} from '../Models/Movie';
import {
  Review,
  REVIEWS
} from '../Models/Review';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']

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

  @Output() movieCreated = new EventEmitter < Movie[] > ();
  @Output() reviewCreated = new EventEmitter < Review[] > ();

  @ViewChild('movieNameInput') movieNameInput: ElementRef;
  constructor() {
 //   console.log("Contstructor Called!")
  }


  ngOnInit() {
   // console.log("ngOnInit Called!")
  }

//  ngDoCheck(){
//   console.log("ngDoCheck called!")
//  }
  onAddMovie(movieInput) {
    //console.log("Teamplate Reference:-",movieInput.value);
    // console.log(this.movieNameInput.nativeElement.value);
    //this.movieNameInput.nativeElement.value='Titanic';
    this.movies.push({
      name: this.newMovieName,
      directorName: this.newDirectorName,
      releaseYear: this.newReleaseYear
    });
    this.movieCreated.emit(this.movies);
    //console.log("Movie Added",this.movies);
  }

  onAddMovieReview() {
    this.reviews.push({
      reviewer: this.newReviewerName,
      comments: this.newComment
    });
    this.reviewCreated.emit(this.reviews);
    //console.log("Movie Review Added",this.reviews);
  }

  ngOnDestroy(){
   console.log("ngOnDestroy Called!")
  }
  removeComponent(){
    console.log(this.reviewsColl);
    this.reviewsColl.splice(0,1);
  }
}
