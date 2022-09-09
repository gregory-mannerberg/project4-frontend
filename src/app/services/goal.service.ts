import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buffer } from 'buffer';

import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  baseUrl = '//localhost:8080/goals';

  constructor(private http: HttpClient) { }

  getGoals(user: string): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.baseUrl + '/user/' + user);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.baseUrl, goal);
  }

  updateGoal(goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(this.baseUrl, goal);
  }

  deleteGoal(id: number): Observable<any> {
    return this.http.delete<Goal>(this.baseUrl + "/id/" + id);
  }
}
