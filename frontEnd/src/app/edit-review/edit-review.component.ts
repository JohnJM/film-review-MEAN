import { Component, OnInit } from '@angular/core';
import {Review} from '../model/review';
import {ReviewService} from '../service/review.service';
import {AuthLoginService} from '../service/auth-login.service';
import {User} from '../model/user';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})

export class EditReviewComponent implements OnInit {
  editReview: Review = {
    _id: '',
    title: '',
    director: '',
    studio: '',
    year: null,
    review: '',
    reviewer: '',
    img: ''
  };

  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviewService.getReviewByID(this.route.snapshot.params['id'])
      .subscribe(res =>{ this.editReview = res ;});
  }

  edit(){
    this.reviewService.editReview(this.editReview._id, this.editReview)
      .subscribe(res=> {
        let id = res['_id'];
        this.router.navigate(['/']);
      }, (err) => {
        throw err;
      })
  };
}
