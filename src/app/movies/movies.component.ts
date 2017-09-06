import { Component, OnInit, EventEmitter,Output } from '@angular/core';
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
 movies:Movie[]=[];
 reviews:Review[]=[];
 
 newMovieName = '';
 newDirectorName='';
 newReleaseYear='';
 
 newReviewerName = '';
 newComment='';

@Output() movieCreated= new EventEmitter<Movie[]>();
@Output() reviewCreated = new EventEmitter<Review[]>();

  constructor() { 
   // console.log(this.moviesColl);
  // console.log(this.reviewsColl);
  }

  ngOnInit() {
  }
  onAddMovie() {
    this.movies.push({
      name: this.newMovieName,
      directorName:this.newDirectorName,
      releaseYear:this.newReleaseYear
      });
      this.movieCreated.emit(this.movies);
      //console.log("Movie Added",this.movies);
}

onAddMovieReview() {
  this.reviews.push({
    reviewer:this.newReviewerName,
    comments:this.newComment
  });
  this.reviewCreated.emit(this.reviews);
  //console.log("Movie Review Added",this.reviews);
}

}
