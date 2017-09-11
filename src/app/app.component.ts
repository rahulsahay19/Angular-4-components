import {
  Component, OnInit
} from '@angular/core';
import {
  Movie
} from "./Models/Movie";
import {
  Review
} from "./Models/Review";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){
 //   console.log("Constructor Called!")
  }
  ngOnInit() {
   // console.log("ngOnInit Called!")
  }
  title = 'app';
  moviesArray;
  reviewsArray;

  onMovieAdded(movieData: Movie[]) {
    this.moviesArray=movieData;
    //  console.log("New Movie Added. Details:- ",
    //   movieData[0].name,
    //   movieData[0].directorName,
    //   movieData[0].releaseYear)

  }

  onReviewAdded(reviewData: Review[]) {
    this.reviewsArray=reviewData;
  // console.log("New Review Added. Details:- ", reviewData[0].reviewer, reviewData[0].comments);
  }
}
