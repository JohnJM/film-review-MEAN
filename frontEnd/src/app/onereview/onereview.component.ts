import { Component, OnInit } from '@angular/core';
// import { FileUploadInputFor, MatFileUpload, MatFileUploadQueue} from 'angular-material-fileupload';
import {Review} from '../model/review';
import {ReviewService} from '../service/review.service';
import {AuthLoginService} from '../service/auth-login.service';
import {User} from '../model/user';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-onereview',
  templateUrl: './onereview.component.html',
  styleUrls: ['./onereview.component.css']
})
export class OnereviewComponent implements OnInit {
  viewReview: Review = {
    _id: '',
    title: '',
    director: '',
    studio: '',
    year: null,
    review: '',
    reviewer: '',
    img: ''
  };
  currentUser: User;
  constructor(private reviewService: ReviewService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reviewService.getReviewByID(this.route.snapshot.params['id'])
      .subscribe(res =>{ this.viewReview = res ;
        console.log(res)});
  }

}
