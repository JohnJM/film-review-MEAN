import { Component, OnInit } from '@angular/core';
import {ManageUserService} from '../service/manageuser.service';
import {Review} from '../model/review';
import {NgForm} from "@angular/forms";
import {Observable } from 'rxjs/Observable';
import {current} from "codelyzer/util/syntaxKind";
import {User} from '../model/user';
import {AuthLoginService} from "../service/auth-login.service";
import {Router} from '@angular/router';
import {ReviewService} from "../service/review.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {
  allUsers: Array<User>;
  currentUser: User;

  constructor(private manageUsersService: ManageUserService, private router: Router, private authService: AuthLoginService) { }

  ngOnInit() {
    this.manageUsersService.getAllUsers()
      .subscribe(data => (this.allUsers = data
      ));
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
  }

  updateUser(user:User){
    console.log(user);
    this.manageUsersService.edit(user._id, user)

      .subscribe(res=> {
        console.log(user);
        let id = res['_id'];
      }, (err) => {
        console.log(err);
      })
    }

}
