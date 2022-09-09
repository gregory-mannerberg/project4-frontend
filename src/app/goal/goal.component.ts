import { Component, OnInit, Input } from '@angular/core';
import { GoalService } from '../services/goal.service';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() goal!: Goal;

  updateGoal: Goal = {
    "id": -1,
    "name": "",
    "description": "",
    "imageUrl": "",
    "targetDate": new Date(),
    "targetAmount": 0,
    "currentAmount": 0
  };

  goalProgress: number = 0;

  display: boolean = false;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.goalProgress = this.goal.currentAmount / this.goal.targetAmount * 100;
  }

  showDialog() {
    this.updateGoal.id = this.goal.id;
    this.updateGoal.name = this.goal.name;
    this.updateGoal.description = this.goal.description;
    this.updateGoal.imageUrl = this.goal.imageUrl;
    this.updateGoal.targetDate = this.goal.targetDate;
    this.updateGoal.targetAmount = this.goal.targetAmount;
    this.updateGoal.currentAmount = this.goal.currentAmount;
    this.display = true;
  }

  update() {
    this.display = false;
    this.goalService.updateGoal(this.updateGoal, 'greg', 'greg').subscribe(goal =>
      this.goal = goal);
  }

}
