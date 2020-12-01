import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Review} from "../model/review";
import {Comment} from "../model/comment";
import {ReviewService} from "../service/review.service";
import {CommentService} from "../service/comment.service"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-input-comment',
  templateUrl: './input-comment.component.html',
  styleUrls: ['./input-comment.component.css']
})
export class InputCommentComponent implements OnInit {
  currentUser = new User('','','');
  currentReview = new Review();
  newComment = new Comment();

  constructor(private reviewService: ReviewService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
  }

  createComment() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentReview = this.route.snapshot.params['id'];
    this.newComment.userid = this.currentUser._id;
    this.newComment.username = this.currentUser.email;
    this.newComment.reviewid = this.route.snapshot.params['id'];

    this.reviewService.createComment(this.newComment).subscribe(res => {
        let id = res['_id'];
      window.location.reload();
      }, (err) => {
        console.log(err);
      }
    );

  }

}
