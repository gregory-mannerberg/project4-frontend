import { Component, OnInit} from '@angular/core';
import { Goal } from './models/goal';
import { GoalService } from './services/goal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spyglass';
  user: string = "";
  newGoal: Goal = {
    "id": -1,
    "name": "",
    "description": "",
    "imageUrl": "",
    "targetDate": new Date(),
    "targetAmount": 0,
    "currentAmount": 0,
    "username": ""
  };
  display: boolean = false;
  
  changeUser(username: string) {
    this.user = username;
    console.log("user: " + this.user);
  }

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
  }

  showDialog() {
    if (this.user !== "") {
      this.display = true;
    }
  }

  addGoal() {
    this.newGoal.username = this.user;
    this.display = false;
    this.goalService.addGoal(this.newGoal).subscribe(goal =>
      {});
  }
}
