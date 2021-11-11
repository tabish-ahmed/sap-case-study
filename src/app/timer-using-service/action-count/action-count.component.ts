import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-action-count',
  templateUrl: './action-count.component.html',
  styleUrls: ['./action-count.component.css']
})
export class ActionCountComponent implements OnInit {

  constructor(public timerService: TimerService) {}

  ngOnInit(): void {
  }

}
