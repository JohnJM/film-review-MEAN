import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../service/review.service';
import {Review} from '../model/review';
import {Observable } from 'rxjs/Observable';
import {current} from "codelyzer/util/syntaxKind";
import {User} from '../model/user';
import {AuthLoginService} from "../service/auth-login.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {
  allReviews: Array<Review>;
  currentUser: User;
  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {
    this.reviewService.getAllReviews()
      .subscribe(data => (this.allReviews = data
      ));
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }


 //delete film with the specific id
  deleteFilm(id){
    this.reviewService.delete(id)
      .subscribe(res=>{
        this.router.navigated = false;

        this.router.navigate(['/']);
        window.location.reload();
      }, (err)=> {
        console.log(err);
      })
  }


  editReview(review){
    // this.reviewService.edit(review)
  }

}


