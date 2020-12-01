import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger /*MatIconModule*/} from '@angular/material';
import {AuthLoginService} from '../service/auth-login.service';
import {User} from '../model/user';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  currentUser: User;
  LoggedIn: boolean;

  constructor(private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.authService.currentLoggedIn.subscribe(LoggedIn => this.LoggedIn = LoggedIn);
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
    console.log("this.loggedin is = " + this.LoggedIn)
  }

}
