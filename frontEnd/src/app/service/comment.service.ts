import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {appConfig} from '../app.config';
import {Comment} from '../model/comment';
import {Observable} from 'rxjs/Observable';
import {Review} from '../model/review';

 @Injectable()
export class CommentService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {}

  create(comment: Comment) {
      return this.http.post(appConfig.apiUrl + '/api/comment', comment);
    }

  getAllComments(): Observable<Array<Comment>> {
    try {
      return this.http.get(`${appConfig.apiUrl}/api/comment`).map(res => res as Array<Comment> || []) ;
    } catch (error) {
      throw error.msg
    }
  }

  getReviewByID(id: string): Observable<any> {
    try {
      return this.http.get(`${appConfig.apiUrl}/api/film` + id);
    } catch (error) {
      throw error.msg;
    }
  }

  delete(id:string){
    return this.http.delete(`${appConfig.apiUrl}/api/film` + id);
  }

  editReview(id:string, review:Review){
    try {
      return this.http.put(`${appConfig.apiUrl}/api/film` + id, review);
    } catch (error) {
      throw error.msg
    }
  }
}


