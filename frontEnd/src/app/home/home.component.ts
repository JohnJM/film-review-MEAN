import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {AuthRegisterService} from "../service/auth-register.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  user : User[] = [];

  constructor(private userService: AuthRegisterService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
  }

}
