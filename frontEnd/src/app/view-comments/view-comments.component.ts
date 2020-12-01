import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../service/review.service';
import {Review} from '../model/review';
import {Observable } from 'rxjs/Observable';
import {current} from "codelyzer/util/syntaxKind";
import {User} from '../model/user';
import {AuthLoginService} from "../service/auth-login.service";
import { Comment } from '../model/comment';
import {ActivatedRoute, Router} from '@angular/router';
import { CommentService } from "../service/comment.service";

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})

export class ViewCommentsComponent{
  allComments: Array<Comment>;
  currentUser: User;
  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private router: Router, private route: ActivatedRoute) { }

   ngOnInit() {
    this.reviewService.getAllComments()
      .subscribe(data => (this.allComments = data
      ));
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser= currentUser);

  }
 }

