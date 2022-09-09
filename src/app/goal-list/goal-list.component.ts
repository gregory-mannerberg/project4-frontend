import { Component, OnInit, Input } from '@angular/core';
import { GoalService } from '../services/goal.service';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Goal[] = [];

  @Input() user: string = "";

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngOnChanges(): void {
    this.findAll();
  }

  findAll(): void {
    this.goalService.getGoals(this.user).subscribe(goals => {
      this.goals = goals;
    });
  }

}
