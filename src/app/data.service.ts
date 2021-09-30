import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()

export class DataService {
  private goals = new BehaviorSubject<any>(['the initial goal','another silly life goal']);
  goal= this.goals.asObservable();
  constructor() { }
  changeGoal(goal: string[]){
    this.goals.next(goal);
  }
}