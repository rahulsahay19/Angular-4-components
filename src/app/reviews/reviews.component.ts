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
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers:[LoggingService]
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

  constructor(private loggingService:LoggingService) {

    this.loggingService.logToConsole("Contstructor Called!");
  }

  ngOnInit() {
    this.loggingService.logToConsole("ngOnInit Called!");
    }

  ngOnChanges(changes: SimpleChanges) {
    this.loggingService.logToConsole("onChanges Called!");
  }
  ngDoCheck() {
    this.loggingService.logToConsole("ngDoCheck Called!")
  }

  ngAfterContentInit(){
    this.loggingService.logToConsole("ngAfterContentInit Called!")
  }
   
  ngAfterContentChecked() {
    this.loggingService.logToConsole("ngAfterContentChecked Called!")
  }
  ngAfterViewInit() {
    this.loggingService.logToConsole("ngAfterViewInit Called!");
  }

  ngAfterViewChecked() {
    this.loggingService.logToConsole("ngAfterViewChecked Called!");
  }
 
  ngOnDestroy(): void {
    this.loggingService.logToConsole("ngOnDestroy Called!")
  }

}
