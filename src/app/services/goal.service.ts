import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buffer } from 'buffer';
import { HttpXsrfTokenExtractor } from '@angular/common/http';

import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  baseUrl = '//localhost:8080/goals';

  constructor(private http: HttpClient, private tokenExtractor: HttpXsrfTokenExtractor) { }

  getGoals(username: string, password: string): Observable<Goal[]> {
    let headers = new HttpHeaders({Authorization: 'Basic ' + Buffer.from(username + ":" + password).toString('base64')});
    return this.http.get<Goal[]>(this.baseUrl, {headers});
  }

  addGoal(goal: Goal, username: string, password: string): Observable<Goal> {
    let headers = new HttpHeaders({Authorization: 'Basic ' + Buffer.from(username + ":" + password).toString('base64')});
    return this.http.post<Goal>(this.baseUrl, goal, {headers});
  }

  updateGoal(goal: Goal, username: string, password: string): Observable<Goal> {
    let token = this.tokenExtractor.getToken();
    console.log(token);
    if (token === null) {
      token = " ";
    }
    let headers = new HttpHeaders({Authorization: 'Basic ' + Buffer.from(username + ":" + password).toString('base64'), "X-XSRF-TOKEN": token});
    return this.http.put<Goal>(this.baseUrl, goal, {headers});
  }

  deleteGoal(id: number, username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({Authorization: 'Basic ' + Buffer.from(username + ":" + password).toString('base64')});
    return this.http.delete<Goal>(this.baseUrl + "/id/" + id, {headers});
  }
}
