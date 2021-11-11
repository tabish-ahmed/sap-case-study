import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-logger',
  templateUrl: './timer-logger.component.html',
  styleUrls: ['./timer-logger.component.css']
})
export class TimerLoggerComponent implements OnInit {

  constructor(public timerService:TimerService) { }

  ngOnInit(): void {
  }

}
