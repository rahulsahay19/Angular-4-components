import { Component, OnInit,Input } from '@angular/core';
import { Review,REVIEWS } from '../Models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
 @Input('reviews') review:Review;

  constructor() { }

  ngOnInit() {
  }

}
