import {
   Component,
   OnInit,
   Input,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy
   } from '@angular/core';
import { Review,REVIEWS } from '../Models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
 
  @Input('reviews') review: Review;

  constructor() {
    console.log("Contstructor Called!")
  }

  ngOnInit() {
    console.log("ngOnInit Called!")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onChanges Called!");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("ngDoCheck Called!")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Called!")
  }
   
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called!")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called!");
  }
 
  ngOnDestroy(): void {
   console.log("ngOnDestroy Called!")
  }

}
