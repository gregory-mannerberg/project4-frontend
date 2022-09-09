import { Component, OnInit } from '@angular/core';
import { GoalService } from '../services/goal.service';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Goal[] = [];

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.goalService.getGoals('greg', 'greg').subscribe(goals => {
      this.goals = goals;
    });
  }

}
