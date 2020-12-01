import { Component, OnInit } from '@angular/core';
// import { FileUploadInputFor, MatFileUpload, MatFileUploadQueue} from 'angular-material-fileupload';
import {Review} from '../model/review';
import {ReviewService} from '../service/review.service';
import {AuthLoginService} from '../service/auth-login.service';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {validationMessage} from "../model/validationMessages";
import { FormControl} from "@angular/forms";


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  htmlContent: string;
  newReview= new Review();
  currentUser = new User('','','');
  constructor(private reviewService: ReviewService,  private router: Router) { }

  ngOnInit() {
  }

  //create review component
  createReview() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newReview.reviewer = this.currentUser._id;
    this.reviewService.create(this.newReview)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );

  }
}
