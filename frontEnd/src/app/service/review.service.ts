import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {appConfig} from '../app.config';
import {Review} from '../model/review';
import {Observable} from 'rxjs/Observable';
import {Comment} from "../model/comment";



@Injectable()
export class ReviewService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) { }
//create a new review
  create(review: Review) {
    console.log(review);

    return this.http.post(appConfig.apiUrl + '/api/film', review);
  }
//get all reviews as observable
  getAllReviews(): Observable<Array<Review>> {
    try {

      return this.http.get(`${appConfig.apiUrl}/api/film`).map(res => res as Array<Review> || []) ;
    } catch (error) {
      console.log(error.msg);
    }
  }
    //get specific review by ID
  getReviewByID(id: string): Observable<any> {
    try {
      return this.http.get(`${appConfig.apiUrl}/api/film` + id);
    } catch (error) {
      console.log(error.msg);
    }
  }


//delete film review
  delete(id:string){
    return this.http.delete(`${appConfig.apiUrl}/api/film` + id);
  }

  editReview(id:string, review:Review){
   try {
     return this.http.put(`${appConfig.apiUrl}/api/film` + id, review);

   } catch (error) {
     console.log(error.msg)
   }

  }

  //comment services below.

  createComment(comment: Comment) {
    console.log(comment);

    try {
      return this.http.post(appConfig.apiUrl + '/api/comment', comment);
    } catch (error){
      console.log(error.msg)
    }
  }

  getAllComments(): Observable<Array<Comment>> {
    try {

      return this.http.get(`${appConfig.apiUrl}/api/comment`).map(res => res as Array<Comment> || []) ;
    } catch (error) {
      console.log(error.msg);
    }
  }


}
