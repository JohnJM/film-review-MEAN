import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {appConfig} from '../app.config';
import {Review} from '../model/review';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ManageUserService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<Array<User>> {
    try {
      return this.http.get(`${appConfig.apiUrl}/api/user`).map(res => res as Array<User> || []);
    } catch (error) {
      console.log(error.msg);
    }
  }

  edit(id:string, user: User){
    return this.http.put(`${appConfig.apiUrl}/api/user` + id, user);
  }
}
